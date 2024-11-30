const express = require('express')
const app = express()
const dataCategory = require('../../../model/category/view')
const edit = require('../../../model/product/edit')
const checkimg = require('../../../middlewea/checkimg')
const coupon = require('../../../model/coupon/view')
module.exports = {
    getEditProduct: async(req,res) => {
        const id = parseInt(req.params.ID)
        const data = await edit.getEditInfproduct(id)
        const category = await dataCategory.category()
        res.render('./admin/product/edit/create',{category:category,data:data[0]})
    },
    postEditProduct:async(req,res)=>{
        const id = parseInt(req.params.ID)
        var anh = req.files;
        const data = await edit.getEditInfproduct(id)
        const img=[]
        if(anh.length != 0){
            for(var i=0; i< anh.length ; i++){
                img.push(await checkimg.checkImg(anh[i],data[0].img[0]))
            }
        }else{
            anh=undefined
            console.log(1)
            img.push(await checkimg.checkImg(anh,data[0].img[0]))
        }
        const name = req.body.name;
        const describe = req.body.describe;
        const content = req.body.content;
        const price = req.body.price;
        const category =parseInt(req.body.category);
        const creat = await edit.postEditProduct(name,describe,content,price,category,img,id)
        res.redirect(`/admin/product/edit/${id}`)
    },
    editdiscount:async(req,res)=>{
        const id= parseInt(req.params.ID)
        const discount = req.body.discount
        const active = parseInt(req.body.active)
        const updat = await edit.editdiscount(id,discount,active)
        res.redirect(`/admin/product/discount/${id}`)
    },
    /////Classfys
    getclassfys: async(req,res) => {
        const id= parseInt(req.params.ID)
        const data = await edit.getEditInfproduct(id)
        res.render('./admin/product/edit/classfy',{data:data[0]})
    },
    postclassfys:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const name = req.body.name
        const quantity = req.body.quantity
        const crea= await edit.createClassfy(name,quantity,id)
        res.redirect(`/admin/product/classfys/${id}`)
    },
    editclassfys:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const name = req.body[`name${id}`]
        const quantity = req.body[`quantity${id}`]
        console.log(name,quantity)
        const update = await edit.editClassfy(name,quantity,id)
        res.redirect(`/admin/product/classfys/${update[0].productid}`)
    },
    deleteclassfys:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const dele = await edit.deleteClassfys(id)
        res.redirect(`/admin/product/classfys/${dele[0].productid}`)
    },
    ///end Classfys
    getdiscount: async(req,res) => {
        const id= parseInt(req.params.ID)
        const data = await edit.getEditInfproduct(id)
        const coupons = await coupon.coupon()
        const category = await dataCategory.category()
        res.render('./admin/product/edit/discount',{data:data[0],coupon:coupons,category:category})
    },
    deleteCoupon:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const dele= await edit.deleteCoupon(id)
        res.redirect(`/admin/product/discount/${dele[0].productid}`)
    },
    changeCoupon:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const coupons = req.body.coupon
        const update = await edit.changeCoupon(id,coupons)
        res.redirect(`/admin/product/discount/${id}`)
    },
    changeCategory:async(req,res)=>{
        const id = parseInt(req.params.ID)
        const category =parseInt(req.body.category);
        const update = await edit.changeCategory(id,category)
        res.redirect(`/admin/product/discount/${id}`)
    },
    ///change STATUS
    changeStatus:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const change=await edit.changeStatus(id)
        res.redirect(`/admin/product`)
    }
}