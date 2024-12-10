const express = require('express')
const app = express()
const model = require('../../model/model single/review')
module.exports = {
    getReviews: async(req,res) => {
        const data = await model.review()
        res.render('./admin/reviews',{data:data})
    },
    deleteReview:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const del = await model.delete(id)
        res.redirect('/admin/reviews')
    }
}