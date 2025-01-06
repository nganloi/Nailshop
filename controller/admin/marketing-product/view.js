const express = require('express')
const app = express()
const view= require('../../../model/marketing-product/view')

module.exports = {
    getMarketingProduct: async(req,res) => {
     const data = await view.marketingProduct()
     const idpage=parseInt(req.params.ID)||1;
     var numberpage='';
     if(data.length> Math.round(data.length/3)*3){
         numberpage= Math.round(data.length/3)+1;
        }else{
            numberpage= Math.round(data.length/3);
        }
     const page=(idpage-1)*3
     const data1 = await view.getPage(page,3)
        res.render('./admin/marketing-product/view', {data:data1,number:numberpage,page:idpage})
    }
}