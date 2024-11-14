const express = require('express')
const router = express.Router();

const productsController = require('../../controller/dashboard/products')

router.get('/', productsController.getSignProducts)
module.exports = router;