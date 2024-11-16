const express = require('express')
const router = express.Router();
const user = require('../../controller/admin/user/view.js')
const userEditController = require('../../controller/admin/user/edit.js')
const userCreateController = require('../../controller/admin/user/create.js')

//VIEW
router.get('/', user.getUser)


// CREATE
router.get('/create',userCreateController.getCreateUser)

// EDIT
router.get('/edit', userEditController.getEditUser)
module.exports = router;