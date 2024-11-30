const express = require('express')
const router = express.Router();

const register = require('../../controller/dashboard/register.js')

router.get('/', register.getRegister)
router.post('/', register.postRegister)


module.exports = router;