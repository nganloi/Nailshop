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

// ADMIN
router.use('/',admin)

// BLOG
router.use('/blog', blogRouter)

// PRODUCT
router.use('/product', productRouter)

// USER
router.use('/user', userRouter)

// PAGES
router.use('/page', pagesRouter)

// COMMENTS
router.use('/comments', comments)

//REVIEWS
router.use('/reviews', reviews)

// COUPON
router.use('/coupon', coupon)



module.exports = router;