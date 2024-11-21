const express = require('express')
const router = express.Router();
const admin = require('./admin/shop.js')
const productRouter = require('./admin/product.js')
const blogRouter = require('./admin/blog.js')
const userRouter = require('./admin/user.js')
const pagesRouter = require('./admin/page.js')
const comments = require('./admin/comments.js')
const  reviews = require('./admin/reviews.js')
const coupon = require('./admin/coupon.js')
const inforshop=require('./admin/inforshop.js')
const social = require('./admin/social.js')
const contact = require('./admin/contact.js')
const marketingshop=require('./admin/marketingShop.js')
const role = require('./admin/role.js')
// ADMIN
router.use('/',admin)

// BLOG
router.use('/blog', blogRouter)

// PRODUCT
router.use('/product', productRouter)

// USER
router.use('/user', userRouter)

// PAGES
router.use('/pages', pagesRouter)

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

//ROLE 
router.use('/role',role)
module.exports = router;