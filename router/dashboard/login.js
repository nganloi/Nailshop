const express = require('express')
const router = express.Router();

const login = require('../../controller/dashboard/login.js')

router.get('/', login.getLogin)


module.exports = router;