const express = require('express')
const app = express()
const model = require('../../model/oder/view')
module.exports = {
    getOder: async(req,res) => {
        const data = await model.oder()
        res.render('./admin/oder/view',{data:data})
    },
    getOderConfirm: async(req,res) => {
        const data = await model.oderConfirm()
        res.render('./admin/oder/oder-confirm',{data:data})
    },
    checkoder:async(req,res)=>{
       const idoder = parseInt(req.params.ID)
       const up = await model.checkoder(idoder)
       res.redirect('/admin/oder')
    }
   
}