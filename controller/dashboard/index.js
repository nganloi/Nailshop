const express = require('express')
const app = express()
const marketing_shop= require('../../model/marketing-shop/view')
const services = require('../../model/service/view')
module.exports = {
    getShop: async(req,res) => {
        const mrt_shop= await marketing_shop.marketingShop()
        const service = await services.Service()
        res.render('./dashboard/index',{mrt_shop:mrt_shop,service:service})
    }
}