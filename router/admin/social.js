const express = require('express')
const router = express.Router();
const view = require('../../controller/admin/social/view.js')
const edit = require('../../controller/admin/social/edit.js')
const create = require('../../controller/admin/social/create.js')
const delet= require('../../controller/admin/social/detele.js')

//VIEWS
router.get('/',view.getSocial)

//EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID', edit.postEdit)

// CREATE
router.get('/create', create.getCreate)
router.post('/create-social',create.postCreate)

// DELETE
router.get('/delete/:ID',delet.getDelete)

//search
router.get('/search', view.getSearch)

module.exports = router;