const express = require('express')
const app = express()
const edit= require('../../../model/typer/edit');
const checkImg=require('../../../middlewea/checkimg')
const viewUser=require('../../../model/user/view')
module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        const user = await viewUser.user()
        res.render('./admin/typer/edit',{data:data[0],user:user})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const user= req.body.user
      const update = await edit.postEdit(id,name,user);
      res.redirect(`/admin/typer`)
    },
}