const express = require('express')
const app = express()
const model = require('../../model/model single/review')
module.exports = {
    getReviews: async(req,res) => {
        const data = await model.review()
        const idpage=parseInt(req.params.ID)||1;
        var numberpage='';
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3 
        const data1 =await model.getPage(page,3)
        res.render('./admin/reviews',{data:data1,number:numberpage,page:idpage})
    },
    deleteReview:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const del = await model.delete(id)
        res.redirect('/admin/reviews')
    }
}