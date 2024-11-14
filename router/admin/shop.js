const express = require('express')
const router = express.Router();
const adminController = require('../../controller/admin/shop.js')

router.get('/', adminController.getShop)
module.exports = router;