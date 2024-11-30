const express = require('express')
const app = express();
const create=require('../../../model/typer/create')
module.exports = {

    postCreate: async(req,res) => {
        const name = req.body.name;
        const user = req.body.user;
        const creat=await create.postCreate(name,user)
        res.redirect(`/admin/typer`)
       
    }
}