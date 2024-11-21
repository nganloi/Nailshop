const express = require('express')
const app = express()
const view= require('../../../model/marketing-product/view')

module.exports = {
    getMarketingProduct: async(req,res) => {
     const data = await view.marketingProduct()
        res.render('./admin/marketing-product/view', {data:data})
    }
}