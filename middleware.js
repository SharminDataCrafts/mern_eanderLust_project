const Listing = require('./models/listing');
const Review = require('./models/review');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema , reviewSchema, userSchema} = require('./schema.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error','You must be logged in to create listing');
        return res.redirect('/login');
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if( req.session.redirectUrl ) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let {id}= req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        console.log('Listing not found');
        req.flash('error', 'Listing you are trying to access does not exist.');
        return res.redirect('/listings');
    }
   
    if(!listing.owner.equals(res.locals.currentUser._id)){
        req.flash('error',"You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// validateListing middleware
module.exports.validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(',');
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

// validateReview middleware
module.exports.validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(',');
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

// validateUser middleware
module.exports.validateUser = (req,res,next)=>{
    let {error} = userSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(',');
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

// validateLocation
module.exports.validateLocation = async(req,res,next)=>{
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 2,
      })
        .send();
 
    // redirect url
    if(response.body.features.length===0){
        req.session.redirectUrl = req.originalUrl;
        let redirectUrl = req.session.redirectUrl;

        if (redirectUrl === '/listings') {
            redirectUrl = 'listings/new';
        }else{
            const idMatch = redirectUrl.match(/^\/listings\/([a-fA-F0-9]{24})(?:\?.*)?$/);   
            if(idMatch){
                const id = idMatch[1];
                redirectUrl = `/listings/${id}/edit`;
            }
        }

        req.flash('error', 'Please Enter a valid location');
        return res.redirect(redirectUrl);
    }else{
        next();
    }
}

module.exports.isReviewAuthor = async(req,res,next)=>{
    let  { id, reviewId }= req.params;
    let review = await Review.findById(reviewId);
    if (!review) {
        req.flash('error', 'Review not found.');
        return res.redirect(`/listings/${id}`); 
    }
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash('error',"You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}