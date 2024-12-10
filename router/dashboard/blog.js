const express = require('express')
const router = express.Router();
const blogController = require('../../controller/dashboard/blog.js')
const login = require('../../middlewea/admin/checkLogin.js')
const comment = require('../../middlewea/checkComment.js')

router.get('/:ID', blogController.getBlogDetail)
router.get('/', blogController.getBlog)
router.post('/comment/:ID',login.requireLogin, comment.requireComment,blogController.postCom)


module.exports = router;