const express = require('express')
const app = express()
const view = require('../../../model/product/view')
module.exports = {
    getProduct: async(req,res) => {
      const data = await view.product1()
      const idpage=parseInt(req.params.ID)||1;
      var numberpage='';
      if(data.length> Math.round(data.length/3)*3){
          numberpage= Math.round(data.length/3)+1;
         }else{
             numberpage= Math.round(data.length/3);
         }
        const page=(idpage-1)*3
        const product = await view.productPage(page);
        res.render('./admin/product/view',{data:product,number:numberpage,page:idpage})
    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const dataa = await view.product1()
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
          const product = await view.productPage(page);
          res.render('./admin/product/view',{data:product,number:numberpage,page:idpage, data:data})
      }
}