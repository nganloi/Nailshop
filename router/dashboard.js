const express = require('express')
const router = express.Router();

const shop = require('./dashboard/index.js')
const products = require('./dashboard/products.js')
const productDetail = require('./dashboard/single-products.js')
const service = require('./dashboard/service.js')
const serviceDetail = require('./dashboard/service-detail.js')
const about = require('./dashboard/about.js')
const blogDetail = require('./dashboard/blog-detail.js')
const blog = require('./dashboard/blog.js')
const cart = require('./dashboard/cart.js')
const checkout = require('./dashboard/checkout.js')
const contact = require('./dashboard/contact.js')
const login = require('./dashboard/login.js')
const register = require('./dashboard/register.js')



router.use('/', shop)
//PRODUCT
router.use('/product', products)

//SINGLE-PRODUCT
router.use('/single-product', productDetail)

//SERVICE
router.use('/service', service)

//SERVICE-DETAIL
router.use('/service-Detail', serviceDetail)

//ABOUT
router.use('/about', about)

//BLOG
router.use('/blog', blog)

//BLOG-DETAIL
router.use('/blog-Detail', blogDetail)

//CART
router.use('/cart', cart)

//CHECKOUT
router.use('/checkout', checkout)

//CONTACT
router.use('/contact', contact)

//LOGIN
router.use('/login', login)

//REGISTER
router.use('/register', register)
module.exports = router;