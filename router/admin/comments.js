const express = require('express')
const router = express.Router();
const commentController = require('../../controller/admin/comments.js')

router.get('/', commentController.getComment)
module.exports = router;