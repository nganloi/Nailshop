const express = require('express')
const app = express()
const view= require('../../../model/blog/view.js')
const tag = require('../../../model/tag/view.js')

module.exports = {
    getBlog: async(req,res) => {
     const data = await view.Blog()
     const tagg = await tag.tag()
     const idpage=parseInt(req.params.ID)||1;
     var numberpage='';
     if(data.length> Math.round(data.length/3)*3){
         numberpage= Math.round(data.length/3)+1;
        }else{
            numberpage= Math.round(data.length/3);
        }
       const page=(idpage-1)*3
        const blog = await view.getpageBlog(page,3)
        res.render('./admin/blog/view', {data:blog,number:numberpage,page:idpage,tag:tagg})
    }
}