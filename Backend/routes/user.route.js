const express = require('express')
const {body} = require('express-validator')
const router = express.Router()
const userController = require('../controller/user.controller')
const Authmiddleware = require('../middleware/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must have 3 characters'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long')
],userController.registerNewUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long')
],userController.loginUser)

router.get('/profile',Authmiddleware.authUser,userController.getUserProfile)


module.exports = router