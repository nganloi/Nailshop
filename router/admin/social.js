const express = require('express')
const router = express.Router();
const Controller = require('../../controller/admin/social/view.js')
const edit = require('../../controller/admin/social/edit.js')
const create = require('../../controller/admin/social/create.js')
const delet= require('../../controller/admin/social/detele.js')

//VIEWS
router.get('/',Controller.getSocial)

//EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID', edit.postEdit)

// CREATE
router.get('/create', create.getCreate)
router.post('/create-social',create.postCreate)

// DELETE
router.get('/delete/:ID',delet.getDelete)


module.exports = router;