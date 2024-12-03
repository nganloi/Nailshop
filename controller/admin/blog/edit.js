const express = require('express')
const app = express()
const edit= require('../../../model/blog/edit.js');
const checkImg=require('../../../middlewea/checkimg.js')
const tag = require('../../../model/tag/view.js')

module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        const tagg = await tag.tag() 
        res.render('./admin/blog/edit',{data, tag:tagg})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const anh = req.file;
      const data = await edit.getEdit(id)
      const img = await checkImg.checkImg(anh,data.img)
      const des = req.body.description;
      const content=req.body.content;
      const time = req.body.time;
      const tag = req.body.tag;
      const update = await edit.postEdit(id,name,img,des,content, time, tag);
      res.redirect(`/admin/blog`)
    }
}