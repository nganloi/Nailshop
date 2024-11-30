const express = require('express')
const app = express()
const edit= require('../../../model/marketing-product/edit');
const viewProduct=require('../../../model/product/view')
const checkImg=require('../../../middlewea/checkimg')
module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        const product=await viewProduct.product()
        res.render('./admin/marketing-product/edit',{data:data[0],product:product})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const anh = req.file;
      const data=await edit.getEdit(id)
      const img=await checkImg.checkImg(anh,data[0])
      const describe=req.body.describe
      const product = req.body.product
      const update = await edit.postEdit(id,name,img,describe,product);
      res.redirect(`/admin/marketing-product`)
    },
    /////CHANGE ACTICE
    changeStatus:async(req,res)=>{
      const id = parseInt(req.params.ID);
      const change=await edit.changeStatus(id)
      res.redirect(`/admin/marketing-product`)
    }
}