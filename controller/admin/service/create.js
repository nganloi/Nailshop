const express = require('express')
const app = express()
const create = require('../../../model/service/create.js')
const checkImg=require('../../../middlewea/checkimg')
module.exports = {
    getCreate: async(req,res) => {
        res.render('./admin/service/create')
    },
    postCreate: async(req,res) => {
        const name = req.body.name;
        const anh = req.file;
        const data=[]
        const img=await checkImg.checkImg(anh,data)
        const content=req.body.content;
        const creat = await create.postCreate(name,img,content)
        res.redirect(`/admin/service`)
       
    }
}