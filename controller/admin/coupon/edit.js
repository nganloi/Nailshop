const express = require('express')
const app = express()

module.exports = {
    getEditCoupon: async(req,res) => {
        res.render('./admin/coupon/edit')
    }
}