const express = require('express')
const router = express.Router();
const forgot = require('../../controller/admin/pages/forgot.js')
const privacy = require('../../controller/admin/pages/privacy.js')
const signin = require('../../controller/admin/pages/signin.js')
const signup = require('../../controller/admin/pages/signup.js')


//FORGOT
router.get('/forgot', forgot.getForgot)

//PRIVACY
router.get('/privacy', privacy.getPrivacy)

//SIGNIN
router.get('/signin', signin.getSignin)

//SIGNUP
router.get('/signup', signup.getSignup)

module.exports = router;