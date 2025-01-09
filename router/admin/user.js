const express = require('express')
const router = express.Router();
const user = require('../../controller/admin/user/view.js')
const delet = require('../../controller/admin/user/delete.js')
const edit = require('../../controller/admin/user/edit.js')

//VIEW
router.get('/', user.getUser)
router.get('/page/:ID', user.getUser)

// SEE
router.get('/edit/:ID',edit.getEdit )

// DELETE
router.get('/delete/:ID', delet. deletet)

// search
router.get('/search', user.getSearch)
module.exports = router;