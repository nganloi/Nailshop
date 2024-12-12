const express = require('express')
const router = express.Router();
const productsController = require('../../controller/dashboard/products.js')
const checklogin = require('.././../middlewea/admin/checkLogin.js')
const checkCart = require('../../middlewea/check/cart.js')
 router.get('/:ID', productsController.getSignProducts)
 router.get('/', productsController.getProducts)
 router.post('/review/:ID',checklogin.requireLogin,productsController.userReview)
 router.post('/cart/:ID',checklogin.requireLogin,checkCart.cart,productsController.cart)
 router.get('/cart/delete/:ID',checklogin.requireLogin,productsController.deleteCart)
 module.exports = router;