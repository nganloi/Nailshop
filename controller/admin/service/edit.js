const express = require('express')
const app = express()
const edit= require('../../../model/service/edit.js');
const checkImg=require('../../../middlewea/checkimg.js')

module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        res.render('./admin/service/edit',{data:data[0]})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const anh = req.file;
      const data = await edit.getEdit(id)
      const img = await checkImg.checkImg(anh,data)
      const content = req.body.content;
      const update = await edit.postEdit(id,name,img,content);
      res.redirect(`/admin/service`)
    }
}