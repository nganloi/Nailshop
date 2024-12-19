const express = require('express')
const router = express.Router();
const cartController = require('../../controller/dashboard/cart.js')
const checkLogin = require('../../middlewea/admin/checkLogin.js')
router.get('/',checkLogin.requireLogin, cartController.getCart)
router.get('/oder-confirm',checkLogin.requireLogin,cartController.getOderConfirm)
module.exports = router;