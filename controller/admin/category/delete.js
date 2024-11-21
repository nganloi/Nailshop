const express = require('express')
const app = express()
const deletets= require('../../../model/category/delete')
const checkImg=require('../../../middlewea/checkimg')
module.exports = {
    deletet: async(req,res) => {
        const id=parseInt(req.params.ID)
        const del=await deletets.delete(id)
        res.redirect(`/admin/category`)
       
    }
}