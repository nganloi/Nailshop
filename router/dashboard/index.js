const express = require('express')
const router = express.Router();
const shopController = require('../../controller/dashboard/index.js')

router.get('/', shopController.getShop)

module.exports = router;