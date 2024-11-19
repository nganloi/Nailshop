const express = require('express')
const app = express()
const view= require('../../../model/marketing-shop/view')

module.exports = {
    getMarketingShop: async(req,res) => {
     const data = await view.marketingShop()
        res.render('./admin/marketing-shop/view', {data:data})
    }
}