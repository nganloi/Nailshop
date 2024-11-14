const express = require('express')
const router = express.Router();

const checkoutController = require('../../controller/dashboard/checkout.js')

router.get('/', checkoutController.getCheckout)
module.exports = router;