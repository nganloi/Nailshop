const express = require('express')
const router = express.Router();
const wishlist = require('../../controller/dashboard/wishlist.js')

router.get('/', wishlist.getWish)

module.exports = router;