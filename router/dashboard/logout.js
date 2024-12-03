const express = require('express')
const router = express.Router();

const logout = require('../../middlewea/admin/logout.js')

router.get('/', logout.logout)

module.exports = router;