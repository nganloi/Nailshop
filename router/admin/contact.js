const express = require('express')
const router = express.Router();
const contact = require('../../controller/admin/contact')

router.get('/', contact.getContact)
router.get('/view/:ID', contact.viewContact)
router.get('/delete/:ID', contact.deletContact)

module.exports = router;