const express = require('express')
const router = express.Router();
const error = require('../../controller/dashboard/404.js')

router.get('/', error.Error)
module.exports = router;