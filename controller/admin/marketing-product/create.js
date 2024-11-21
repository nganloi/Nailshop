const express = require('express')
const app = express()
const create = require('../../../model/marketing-product/create')
const checkImg=require('../../../middlewea/checkimg')
const viewProduct=require('../../../model/product/view')
module.exports = {
    getCreate: async(req,res) => {
        const product = await viewProduct.product()
        res.render('./admin/marketing-product/create',{product:product})
    },
    postCreate: async(req,res) => {
        const name = req.body.name;
        const anh = req.file;
        const data=[]
        const img=await checkImg.checkImg(anh,data)
        const describe=req.body.describe
        const product = req.body.product
        const creat = await create.postCreate(name,img,describe,product)
        res.redirect(`/admin/marketing-product`)
       
    }
}