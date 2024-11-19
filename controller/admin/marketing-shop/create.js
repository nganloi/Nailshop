const express = require('express')
const app = express()
const create = require('../../../model/marketing-shop/create')
const checkImg=require('../../../middlewea/checkimg')
module.exports = {
    getCreate: async(req,res) => {
        res.render('./admin/marketing-shop/create')
    },
    postCreate: async(req,res) => {
        const name = req.body.name;
        const link = req.body.link;
        const anh = req.file;
        const data=[]
        const img=await checkImg.checkImg(anh,data)
        const describe=req.body.describe
        const creat = await create.postCreate(name,link,img,describe)
        res.redirect(`/admin/marketing-shop`)
       
    }
}