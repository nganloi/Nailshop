const express = require('express')
const app = express()
const editModel = require('../../../model/social/edit.js');


module.exports = {
    getEdit: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data = await editModel.getEdit(genId)
        res.render('./admin/social/edit',{edit:data})
    },
    postEdit: async(req,res) => {
      const genId = parseInt(req.params.ID);
      const  name = req.body.name;
      const  img = req.body.image;
      const link = req.body.link;
      const update = await editModel.postEdit(genId,name,img,link);
      res.redirect(`/admin/social`)

    }
}