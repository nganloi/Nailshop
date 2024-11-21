const express = require('express')
const app = express()
const view= require('../../../model/tag/view.js')
module.exports = {
    getTag: async(req,res) => {
     const data = await view.tag() 
    res.render('./admin/tag/view', {data:data})
    }
}