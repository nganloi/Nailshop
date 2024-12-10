const express = require('express')
const router = express.Router();
const reviewsController = require('../../controller/admin/reviews.js')

router.get('/', reviewsController.getReviews)
router.get('/delete/:ID',reviewsController.deleteReview)
module.exports = router;