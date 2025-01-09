const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/tag/view.js')
const edit = require('../../controller/admin/tag/edit.js');
const create = require('../../controller/admin/tag/create.js')
const deletet=require('../../controller/admin/tag/delete.js')

// VIEW
router.get('/',view.getTag)
router.get('/page/:ID',view.getTag)
// CREATE
router.post('/create',create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',edit.postEdit)
//DELETE
router.get('/delete/:ID',deletet.deletet)

// search
router.get('/search', view.getSearch)

module.exports = router;