const express = require('express')
const router = express.Router();
 const productsController = require('../../controller/dashboard/products.js')


 router.get('/', productsController.getProducts)
 module.exports = router;