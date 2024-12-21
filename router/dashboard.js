const express = require('express')
const router = express.Router();
const shop = require('./dashboard/index.js')
const products = require('./dashboard/products.js')
const service = require('./dashboard/service.js')
const serviceDetail = require('./dashboard/service-detail.js')
const blog = require('./dashboard/blog.js')
const cart = require('./dashboard/cart.js')
const checkout = require('./dashboard/checkout.js')
const contact = require('./dashboard/contact.js')
const wishlist = require('./dashboard/wishlist.js')
const error = require('./dashboard/404.js')
const login = require('./dashboard/login.js')
const register = require('./dashboard/register.js')
const logout = require('./dashboard/logout.js')
const checklogin = require('../middlewea/admin/checkLogin.js')
const profile = require('./dashboard/profile.js')
const search = require('./dashboard/search.js')

router.use('/', shop)
//PRODUCT
router.use('/product', products)

router.use('/search',search)
//SERVICE
router.use('/service', service)

//SERVICE-DETAIL
router.use('/service-Detail', serviceDetail)

//BLOG
router.use('/blog', blog)

//CART
router.use('/cart', cart)

//WISHLIST
router.use('/wishlist',checklogin.requireLogin, wishlist)

//ERROR
router.use('/error', error)

//CHECKOUT
router.use('/checkout',checklogin.requireLogin,checkout)

//CONTACT
router.use('/contact', contact)

//LOGIN
router.use('/login', login)

//REGISTER
router.use('/register', register)

//LOGOUT
router.use('/logout', logout)

//PROFILE
router.use('/profile',checklogin.requireLogin, profile)
module.exports = router;