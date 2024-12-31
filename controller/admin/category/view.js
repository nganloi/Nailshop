const express = require('express')
const app = express()
const view= require('../../../model/category/view')
const viewProduct=require('../../../model/product/view')
module.exports = {
    getCategori: async(req,res) => {
     const data = await view.category() 
     const product=await viewProduct.product()
     const idpage=parseInt(req.params.ID)||1;
     var numberpage='';
     if(data.length> Math.round(data.length/3)*3){
         numberpage= Math.round(data.length/3)+1;
        }else{
            numberpage= Math.round(data.length/3);
        }
       const page=(idpage-1)*3
       const category = await view.page(page,3)
    res.render('./admin/category/view', {data:category,number:numberpage,page:idpage,product:product})
    }
}