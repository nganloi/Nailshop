const express = require('express')
const app = express()
const edit= require('../../../model/category/edit');
const checkImg=require('../../../middlewea/checkimg')
const viewProduct=require('../../../model/product/view')
module.exports = {
    getEdit: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await edit.getEdit(id)
        const product = await viewProduct.product()
        res.render('./admin/category/edit',{data:data[0],product:product})
    },
    postEdit: async(req,res) => {
      const id = parseInt(req.params.ID);
      const name = req.body.name;
      const product= req.body.product
      const update = await edit.postEdit(id,name,product);
      res.redirect(`/admin/category`)
    },
}