const express = require('express')
const router = express.Router();

const aboutController = require('../../controller/dashboard/about.js')

router.get('/', aboutController.getAbout)

module.exports = router;