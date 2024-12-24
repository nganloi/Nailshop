const express = require('express')
const app = express()
const blog =require('../../model/blog/view')
const review = require('../../model/product/view')
const coupon = require('../../model/coupon/view')
const order = require('../../model/oder/view')
module.exports = {
    getAdmin: async(req,res) => {
        const comment = await blog.getComment()
        const reviews = await review.review()
        const coupons = await coupon.couponOn()
        const orders = await order.oder()
        res.render('./admin/index',{comment:comment,review:reviews,coupon:coupons,order:orders})
    }
}