const express = require('express')
const app = express()
const view= require('../../../model/blog/view.js')
const tag = require('../../../model/tag/view.js')

module.exports = {
    getBlog: async(req,res) => {
     const data = await view.Blog()
     const tagg = await tag.tag()
        res.render('./admin/blog/view', {data:data, tag:tagg})
    }
}