const express = require('express')
const app = express()
const edit = require('../../../model/coupon/edit')
const create = require('../../../model/coupon/create')
const viewProduct= require('../../../model/product/view')
const viewUser = require('../../../model/user/view')
const viewTyper = require('../../../model/typer/view')
const viewCategory =require('../../../model/category/view')
module.exports = {
    getEditCoupon: async(req,res) => {
        const id = parseInt(req.params.ID)
        const data = await edit.getEdit(id)
        const product = await viewProduct.product()
        const typer = await viewTyper.typer()
        const user = await viewUser.user()
        const category = await viewCategory.category()
        res.render('./admin/coupon/edit',{data:data[0],product:product,user:user,typer:typer,category:category})
    },
    postEditCoupon: async(req,res) => {
        const id = parseInt(req.params.ID)
        const name = req.body.nameS
        const buymin = req.body.buymin
        const quanlity = req.body.quanlity
        var discountpercent = '0'
        var discountprice = '0'
        const discount = req.body.discount
        const value = req.body.value
        const typer =req.body.typer
        const user = req.body.user
        const category = req.body.category
        const product = req.body.product
        if(discount == 0){
            discountpercent = value
        }else{
            discountprice = value
        }
        const creat= await edit.postEdit(id,name,buymin,quanlity,discountpercent,discountprice,typer,user,category,product)
        res.redirect(`/admin/coupon`)
    },
    changeStatus:async(req,res)=>{
        const id = parseInt(req.params.ID);
        const change=await edit.changeStatus(id)
        res.redirect(`/admin/coupon`)
      }
  
}