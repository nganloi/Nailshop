const express = require('express')
const app = express()
const user = require('../../../model/user/view.js')
module.exports = {
    getUser: async(req,res) => {
       const data = await user.user()
       const idpage=parseInt(req.params.ID)||1;
       var numberpage='';
       if(data.length> Math.round(data.length/3)*3){
           numberpage= Math.round(data.length/3)+1;
          }else{
              numberpage= Math.round(data.length/3);
          }
       const page=(idpage-1)*3
       const data1 = await user.getPage(page,3)  
        res.render('./admin/user/view', {data:data1,number:numberpage,page:idpage})
    }
}