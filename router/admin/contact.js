const express = require('express')
const router = express.Router();
const contact = require('../../controller/admin/contact.js')

router.get('/', contact.getContact)
router.post('/', contact.postContact)
router.get('/delete/:ID', contact.deletContact)

module.exports = router;