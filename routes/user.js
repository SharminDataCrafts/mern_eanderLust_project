const express =  require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const {validateUser, saveRedirectUrl} = require('../middleware.js');

const userController = require('../controllers/users.js');


// -------Signup-----------

// SignupForm & createUser Route
router.route('/signup')
.get(userController.renderSignupForm )
.post(
    validateUser,
    wrapAsync( userController.signup ) );


// -------Login-----------

// LoginForm & authenticateUser Route
router.route('/login')
.get( userController.renderLoginForm)
.post( 
    saveRedirectUrl,
    passport.authenticate('local', {
         failureRedirect:'/login' , 
         failureFlash: true ,    
    }),  
    userController.login
   );


// --------Logout------
router.get('/logout', userController.logout );


module.exports = router; 