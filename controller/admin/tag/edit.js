const express = require('express')
const app = express()
const edit= require('../../../model/role/edit');
const checkImg=require('../../../middlewea/checkimg')
const viewUser=require('../../../model/user/view')
module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        res.render('./admin/tag/edit',{data:data[0]})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const update = await edit.postEdit(id,name);
      res.redirect(`/admin/tag`)
    },
}