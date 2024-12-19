const express = require('express')
const app = express();
const create=require('../../../model/category/create')
module.exports = {
    postCreate: async(req,res) => {
        const name = req.body.name;
        const content = req.body.content
        const product = req.body.product;
        const creat=await create.postCreate(name,content,product)
        res.redirect(`/admin/category`)
       
    }
}