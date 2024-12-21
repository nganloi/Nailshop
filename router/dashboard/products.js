const express = require('express')
const router = express.Router();
const productsController = require('../../controller/dashboard/products.js')
const checklogin = require('.././../middlewea/admin/checkLogin.js')
const checkCart = require('../../middlewea/check/cart.js')
const checkoutController = require('../../controller/dashboard/checkout.js')
 router.get('/:ID', productsController.getSignProducts)
 router.get('/', productsController.getProducts)
 router.get('/page/:ID', productsController.getProducts)
 router.post('/review/:ID',checklogin.requireLogin,productsController.userReview)
 router.post('/cart/:ID',checklogin.requireLogin,checkCart.cart,productsController.cart)
 router.get('/cart/delete/:ID',checklogin.requireLogin,productsController.deleteCart)
 router.get('/wishlist/:ID',checklogin.requireLogin,productsController.creatWish)
 router.post('/coupon/:ID', checkoutController.postCoupon)

 module.exports = router;