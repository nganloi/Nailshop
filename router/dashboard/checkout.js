const express = require('express')
const router = express.Router();
const checkoutController = require('../../controller/dashboard/checkout.js')
const check = require('../../middlewea/check/order.js')
router.post('/',check.order,checkoutController.getCheckout)
router.get('/oder/:ID',checkoutController.oder)
router.get('/',checkoutController.getCheckoutcoupon)


module.exports = router;