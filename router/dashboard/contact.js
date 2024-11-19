const express = require('express')
const router = express.Router();

const contact = require('../../controller/dashboard/contact.js')

router.get('/', contact.getContact)
router.post('/', contact.postContact)


module.exports = router;