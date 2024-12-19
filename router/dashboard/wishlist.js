const express = require('express')
const router = express.Router();
const wishlist = require('../../controller/dashboard/wishlist.js')

router.get('/', wishlist.getWish)
router.get('/delete/:ID', wishlist.deletWish)
module.exports = router;