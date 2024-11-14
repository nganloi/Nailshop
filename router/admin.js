const express = require('express')
const router = express.Router();
const admin = require('./admin/shop.js')
 
router.use('/', admin)

module.exports = router;