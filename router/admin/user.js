const express = require('express')
const router = express.Router();
const user = require('../../controller/admin/user/view.js')
const delet = require('../../controller/admin/user/delete.js')

//VIEW
router.get('/', user.getUser)




// EDIT
router.get('/delete/:ID', delet. deletet)
module.exports = router;