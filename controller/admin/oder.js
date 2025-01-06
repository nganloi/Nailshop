const express = require('express')
const app = express()
const model = require('../../model/oder/view')
module.exports = {
    getOder: async(req,res) => {
        const data = await model.oder()
        const idpage=parseInt(req.params.ID)||1;
        var numberpage='';
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3
        const data1 = await model.getPageOder(page,3)
        res.render('./admin/oder/view',{data:data1,number:numberpage,page:idpage})
    },
    getOderConfirm: async(req,res) => {
        const data = await model.oderConfirm()
        const idpage=parseInt(req.params.ID)||1;
        var numberpage='';
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3 
        const data1 = await model.getPageOderConfirm(page,3)
        res.render('./admin/oder/oder-confirm',{data:data1,number:numberpage,page:idpage})
    },
    checkoder:async(req,res)=>{
       const idoder = parseInt(req.params.ID)
       const up = await model.checkoder(idoder)
       res.redirect('/admin/oder')
    }
   
}