const express = require('express')
const app = express()
const blogg = require('../../model/blog/view.js')
const userr = require('../../model/user/view.js')
const marketing_shop= require('../../model/marketing-shop/view')
const services = require('../../model/service/view')
const category = require('../../model/category/view')
const dataCart = require('../../model/user/view.js')
const marketing_product = require('../../model/marketing-product/view.js')
module.exports = {
    getShop: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const blog = await blogg.Blog()
        const mrt_shop= await marketing_shop.marketingShop()
        const service = await services.Service()
        const categorys = await category.category()
        const mrt_product = await marketing_product.marketingProduct()
        res.render('./dashboard/index',{mrt_shop:mrt_shop,mrt_product:mrt_product,service:service,category:categorys,user:user,blog:blog})
    }
}