const express = require('express')
const router = express.Router();

const cartController = require('../../controller/dashboard/cart.js')

router.get('/', cartController.getCart)

module.exports = router;