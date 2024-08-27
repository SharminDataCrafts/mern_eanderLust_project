const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {validateListing, validateLocation, isLoggedIn, isOwner, saveRedirectUrl} =  require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer  = require('multer');
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });



// // test listing 
// app.get('/testListing',async(req,res)=>{
//     let sampleListing = new Listing({
//         title:'My new villa',
//         description: 'By the beach',
//         price:2500,
//         location:'cox-bazar',
//         country:'Bangladesh',
//     });
//     try{
//         await sampleListing.save();
//         console.log('sample was saved');
//         res.send('successful testing'); 
//     }catch(err){
//         console.log('Error saving sample listing:', err);
//         res.status(500).send('Error testing listing');
//     }
// });


// //check datas for index routing
// app.get('/listings',(req,res)=>{
//     Listing.find({}).then((results)=>{
//         console.log(results);
//     }).catch(err=>{
//         console.log(err);
//     });
// });



// Index & Create Route 
router.route('/')
    .get( wrapAsync(listingController.index))
    .post(
        isLoggedIn, 
        upload.single('listing[image]'), 
        validateListing,
        validateLocation,
        wrapAsync(listingController.createListing)
    );


// New Route
router.get('/new', isLoggedIn, wrapAsync( listingController.renderNewForm ));


// search Route
router.get('/search', wrapAsync(listingController.searchListing));

// Show , Update & Delete Route
router.route('/:id')
.get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn, 
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        validateLocation,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn, 
        isOwner,
        wrapAsync(listingController.destroyListing)
    );


// Edit Route
router.get('/:id/edit', 
    isLoggedIn, 
    isOwner,
    wrapAsync(listingController.renderEditForm)
);




module.exports = router;