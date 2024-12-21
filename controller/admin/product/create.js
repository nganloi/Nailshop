const express = require('express')
const app = express()
const dataCategory = require('../../../model/category/view')
const checkImg = require('../../../middlewea/checkimg')
const create = require('../../../model/product/create')
module.exports = {
    getCreateProduct: async(req,res) => {
        const category = await dataCategory.category()
        res.render('./admin/product/create/create',{category:category})
    },
    getFalse:async(req,res)=>{
       res.redirect('/admin/product/create')
    },
    postCreate:async(req,res)=>{
        const anh = req.files;
        const data = []
        const img=[]
        for(var i=0; i< anh.length ; i++){
            img.push(await checkImg.checkImg(anh[i],data))
        }
        const name = req.body.name;
        const describe = req.body.describe;
        const content = req.body.content;
        var price = parseInt(req.body.price);
        if(isNaN(price)){
           price = 0;
        }
        const category = parseInt(req.body.category);
        const creat = await create.infProduct(name,describe,content,price,category,img)
        res.redirect(`/admin/product/edit/${creat[0].id}`)
    },
    

}