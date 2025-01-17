const express = require('express')
const app = express()
const view = require('../../../model/coupon/view')
module.exports = {
    getCoupon: async(req,res) => {
        const data = await view.coupon()
        const idpage=parseInt(req.params.ID)||1;
        var numberpage='';
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3
        const coupon = await view.getPage(page,3)    
        res.render('./admin/coupon/view',{data:coupon,number:numberpage,page:idpage})
    }
}