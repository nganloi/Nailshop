const express = require('express')
const app = express()
const create = require('../../../model/blog/create.js')
const checkImg=require('../../../middlewea/checkimg')
const tag = require('../../../model/tag/view.js')
module.exports = {
    getCreate: async(req,res) => {
        const tagg = await tag.tag() 
        res.render('./admin/blog/create', {tag:tagg})
    },
    postCreate: async(req,res) => {
        const name = req.body.name;
        const anh = req.file;
        const data=[]
        const img=await checkImg.checkImg(anh,data)
        const des = req.body.description;
        const content=req.body.content;
        const time = req.body.time;
        const tag = req.body.tag;
        const creat = await create.postCreate(name,img,des,content, time, tag)
        res.redirect(`/admin/blog`)
       
    }
}