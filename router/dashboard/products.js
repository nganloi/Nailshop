const express = require('express')
const router = express.Router();
const productsController = require('../../controller/dashboard/products.js')
const checklogin = require('.././../middlewea/admin/checkLogin.js')

 router.get('/:ID', productsController.getSignProducts)
 router.get('/', productsController.getProducts)
 router.post('/review/:ID',checklogin.requireLogin,productsController.userReview)
 module.exports = router;