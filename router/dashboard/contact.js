const express = require('express')
const router = express.Router();

const contactController = require('../../controller/dashboard/contact.js')

router.get('/', contactController.getContact)

module.exports = router;