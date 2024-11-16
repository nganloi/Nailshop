const express = require('express')
const app = express()

module.exports = {
    getCreateCoupon: async(req,res) => {
        res.render('./admin/coupon/create')
    }
}