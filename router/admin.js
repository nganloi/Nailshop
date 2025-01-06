const express = require('express')
const router = express.Router();
const admin = require('./admin/shop.js')
const product = require('./admin/product.js')
const blog = require('./admin/blog.js')
const user = require('./admin/user.js')
// const pages = require('./admin/page.js')
const comments = require('./admin/comments.js')
const reviews = require('./admin/reviews.js')
const coupon = require('./admin/coupon.js')
const inforshop = require('./admin/inforshop.js')
const social = require('./admin/social.js')
const contact = require('./admin/contact.js')
const service = require('./admin/service.js')
const marketingshop=require('./admin/marketingShop.js')
const role = require('./admin/role.js')
const tag = require('./admin/tag.js')
const category = require('./admin/categoriy.js')
const typer = require('./admin/typer.js')
const marketingproduct=require('./admin/marketingProduct.js')
const oder = require('./admin/oder.js')
// ADMIN
router.use('/',admin)

// BLOG
router.use('/blog', blog)

// PRODUCT
router.use('/product', product)

// USER
router.use('/user', user)

// PAGES
// router.use('/pages', pages)

// COMMENTS
router.use('/comments', comments)

//REVIEWS
router.use('/reviews', reviews)

// COUPON
router.use('/coupon', coupon)

//SOCIAL
router.use('/social',social)

//INFORSHOP
router.use('/inforshop',inforshop)


//CONTACT
router.use('/contact', contact)

//MARKETING SHOP
router.use('/marketing-shop',marketingshop)

//SERVICE
router.use('/service', service)

//ROLE 
router.use('/role',role)

//TAG
router.use('/tag', tag)
//CATEGORY
router.use('/category',category)

//TYPE
router.use('/typer', typer)

//MARKETING PRODUCT
router.use('/marketing-product',marketingproduct)

//ODER
router.use('/oder',oder)
module.exports = router;