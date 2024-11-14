const express = require('express')
const router = express.Router();

const serviceController = require('../../controller/dashboard/service.js')
router.get('/', serviceController.getServiceDetail)
module.exports = router;