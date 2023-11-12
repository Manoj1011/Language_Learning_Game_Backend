const express = require('express');
// const {passportGoogle} = require('../services'); 
const { isAuth } = require("../middlewares");
const {authController} = require('../controllers')

const router = express.Router();


router.post('/signout', isAuth, authController.signOut );

router.post('/signup',authController.signUp);

router.post('/signin', authController.signIn);

module.exports = router;
