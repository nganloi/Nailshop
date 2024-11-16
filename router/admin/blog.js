const express = require('express')
const router = express.Router();

const blogController = require('../../controller/admin/blog/view.js')
const blogEditController = require('../../controller/admin/blog/edit.js')
const blogCreateController = require('../../controller/admin/blog/create.js')


//VIEW
router.get('/', blogController.getBlog)

//CREATE
router.get('/create', blogCreateController.getCreateBlog)

//EDIT
router.get('/edit', blogEditController.getEditBlog)
module.exports = router;
