const express = require('express')
const router = express.Router();
const commentController = require('../../controller/admin/comments.js')


router.get('/', commentController.getComment)
router.get('/page/:ID', commentController.getComment)
router.get('/delete/:ID', commentController.deleComment)
module.exports = router;