const express = require('express')
const app = express()
const view= require('../../../model/tag/view.js')
module.exports = {
    getTag: async(req,res) => {
     const data = await view.tag() 
     const idpage=parseInt(req.params.ID)||1;
     var numberpage='';
     if(data.length> Math.round(data.length/3)*3){
         numberpage= Math.round(data.length/3)+1;
        }else{
            numberpage= Math.round(data.length/3);
        }
     const page=(idpage-1)*3
     const data1 = await view.getPage(page,3)
    res.render('./admin/tag/view', {data:data1,number:numberpage,page:idpage})
    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const dataa = await view.tag() 
        const idpage=parseInt(req.params.ID)||1;
        var numberpage='';
        var data = dataa.filter((name) => {
            return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3
        const data1 = data.slice(page,3)
       res.render('./admin/tag/view', {data:data1,number:numberpage,page:idpage})
       }
}