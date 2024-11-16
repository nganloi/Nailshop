const express = require('express')
const app = express()
const createModel = require('../../../model/social/create.js')

module.exports = {
    getCreate: async(req,res) => {
        res.render('./admin/social/create')
    },
    postCreate: async(req,res) => {
        const name = req.body.name;
        const link = req.body.link;
        const img = req.body.image;
        const create = await createModel.postCreate(name,link,img)
        res.redirect(`/admin/social`)
       
    }
}