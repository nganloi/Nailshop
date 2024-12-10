const express = require('express')
const app = express();
const create=require('../../../model/role/create')
module.exports = {

    postCreate: async(req,res) => {
        const name = req.body.name;
        const user = req.body.user;
        console.log(req.body.active)
        const creat=await create.postCreate(name,user)
        res.redirect(`/admin/role`)
       
    }
}