const express = require('express')
const router = express.Router();
const Controller = require('../../controller/admin/shop.js')
router.get('/',Controller.getAdmin)

module.exports = router;