const express = require('express')
const app = express()
const view = require('../../../model/product/view')
module.exports = {
    getProduct: async(req,res) => {
        const data = await view.product1()
        res.render('./admin/product/view',{data:data})
    }
}