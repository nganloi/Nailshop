const express = require('express')
const router = express.Router();
const productsController = require('../../controller/dashboard/products.js')

 router.get('/', productsController.getSearch)
 // search theo thể loại
 router.get('/cate', productsController.getSearchCate)

 // search theo giá tiền của sản phẩm
 router.get('/price', productsController.getSearchPrice)
 module.exports = router;