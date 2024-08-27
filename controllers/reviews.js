const Listing = require('../models/listing');
const Review = require('../models/review');


module.exports.createReview = async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);

    listing.reviews.push(newReview);

    // save to db
    await newReview.save();
    await listing.save();

    // flash msg
    req.flash('success', 'New review added!');

    console.log('New review Saved'); 
    res.redirect(`/listings/${listing._id}`); 
    //  res.redirect(`/listings/${listing.id}`);  -->same as upperline  
}


module.exports.destroyReview = async(req,res)=>{
            
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    // flash msg
    req.flash('success', 'Review Deleted');

    res.redirect(`/listings/${id}`);
}