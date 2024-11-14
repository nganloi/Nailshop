const express = require('express')
const router = express.Router();

const serviceController = require('../../controller/dashboard/service')
router.get('/', serviceController.getService)
module.exports = router;