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


router.use('/', shop)
router.use('/product', products)
router.use('/single-product', productDetail)
router.use('/service', service)
router.use('/service-Detail', serviceDetail)
router.use('/about', about)
router.use('/blog', blog)
router.use('/blog-Detail', blogDetail)
router.use('/cart', cart)
router.use('/checkout', checkout)
router.use('/contact', contact)
module.exports = router;