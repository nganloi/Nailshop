const express = require('express')
const router = express.Router();

const register = require('../../controller/dashboard/register.js')
const checkRole = require('../../middlewea/admin/checkrole.js')

router.get('/', register.getRegister)
router.post('/',checkRole.checkRole, register.postRegister)


module.exports = router;