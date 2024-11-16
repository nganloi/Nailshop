const express = require('express')
const app = express()

module.exports = {
    getCoupon: async(req,res) => {
        res.render('./admin/coupon/view')
    }
}