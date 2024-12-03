const express = require('express')
const app = express()
const userr = require('../../model/user/view.js')
const marketing_shop= require('../../model/marketing-shop/view')
const services = require('../../model/service/view')
const category = require('../../model/category/view')
module.exports = {
    getShop: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const mrt_shop= await marketing_shop.marketingShop()
        const service = await services.Service()
        const categorys = await category.category()
        res.render('./dashboard/index',{mrt_shop:mrt_shop,service:service,category:categorys,user:user})
    }
}