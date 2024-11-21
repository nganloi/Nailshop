const express = require('express')
const app = express()
const view= require('../../../model/category/view')
const viewProduct=require('../../../model/product/view')
module.exports = {
    getRole: async(req,res) => {
     const data = await view.category() 
     const product=await viewProduct.product()
    res.render('./admin/category/view', {data:data,product:product})
    }
}