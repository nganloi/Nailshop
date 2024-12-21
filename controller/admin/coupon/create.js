const express = require('express')
const app = express()
const create = require('../../../model/coupon/create')
const viewProduct= require('../../../model/product/view')
const viewUser = require('../../../model/user/view')
const viewTyper = require('../../../model/typer/view')
const viewCategory =require('../../../model/category/view')
module.exports = {
    getCreateCoupon: async(req,res) => {
        const product = await viewProduct.product()
        const typer = await viewTyper.typer()
        const user = await viewUser.user()
        const category = await viewCategory.category()
        res.render('./admin/coupon/create',{product:product,user:user,typer:typer,category:category})
    },
    postCreateCoupon: async(req,res) => {
        const name = req.body.name
        const buymin = parseInt(req.body.buymin)
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
        const creat= await create.postCreate(name,buymin,quanlity,discountpercent,discountprice,typer,user,category,product)
        res.redirect('/admin/coupon')
    }
}