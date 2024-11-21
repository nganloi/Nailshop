const express = require('express')
const app = express()
const edit= require('../../../model/marketing-shop/edit');
const viewUser=require('../../../model/user/view')
const checkImg=require('../../../middlewea/checkimg')
module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        const user=await viewUser.user()
        res.render('./admin/marketing-shop/edit',{data:data[0],user:user})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const link = req.body.link;
      const anh = req.file;
      const data=await edit.getEdit(id)
      const img=await checkImg.checkImg(anh,data[0])
      const describe=req.body.describe
      const update = await edit.postEdit(id,name,img,link,describe);
      res.redirect(`/admin/marketing-shop`)
    },
    /////CHANGE ACTICE
    changeStatus:async(req,res)=>{
      const id = parseInt(req.params.ID);
      const change=await edit.changeStatus(id)
      res.redirect(`/admin/marketing-shop`)
    }
}