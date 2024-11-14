const express = require('express')
const router = express.Router();

const blogController = require('../../controller/dashboard/blog.js')

router.get('/', blogController.getBlogDetail)

module.exports = router;