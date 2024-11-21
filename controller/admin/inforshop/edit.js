const express = require('express')
const app = express()
const checkimg=require('../../../middlewea/checkimg')
const edit=require('../../../model/inforshop/edit')
const view=require('../../../model/inforshop/view')
module.exports = {
    //////EDIT
    getEdit: async(req,res) => {
        const data=await view.getInforshop()
        res.render('./admin/inforshop/edit',{data:data})
    },
    postEdit:async(req,res)=>{
        const name=req.body.name
        const email=req.body.email
        const phone=req.body.phone
        const address=req.body.address
        const describe=req.body.describe
        const time=req.body.time
        const anh=req.file
        const data= await view.getInforshop()
        const img=await checkimg.checkImg(anh,data)
        const creates=await edit.editShop(name, email, phone, address, describe, time, img)
        res.redirect('/admin/inforshop')
    }
}