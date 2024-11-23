const express = require('express')
const app = express()
const view = require('../../../model/coupon/view')
module.exports = {
    getCoupon: async(req,res) => {
        const data = await view.coupon()
        res.render('./admin/coupon/view',{data:data})
    }
}