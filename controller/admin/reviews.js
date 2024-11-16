const express = require('express')
const app = express()

module.exports = {
    getReviews: async(req,res) => {
        res.render('./admin/reviews')
    }
}