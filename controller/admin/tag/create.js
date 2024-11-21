const express = require('express')
const app = express();
const create=require('../../../model/tag/create.js')
module.exports = {

    postCreate: async(req,res) => {
        const name = req.body.name;
        const creat=await create.postCreate(name)
        res.redirect(`/admin/tag`)
       
    }
}