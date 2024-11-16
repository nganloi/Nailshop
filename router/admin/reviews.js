const express = require('express')
const router = express.Router();
const reviewsController = require('../../controller/admin/reviews.js')

router.get('/', reviewsController.getReviews)
module.exports = router;