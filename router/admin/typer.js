const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/typer/view.js')
const edit = require('../../controller/admin/typer/edit.js');
const create = require('../../controller/admin/typer/create.js')
const deletet=require('../../controller/admin/typer/delete.js')

// VIEW
router.get('/',view.getType)
// CREATE
router.post('/create',create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',edit.postEdit)
//DELETE
router.get('/delete/:ID',deletet.deletet)

//search
router.get('/search', view.getSearch)

module.exports = router;