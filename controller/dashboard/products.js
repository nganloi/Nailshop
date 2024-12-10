const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const  dataProduct = require('../../model/product/view.js')
const  singleProduct = require('../../model/product/edit.js')
const  userReview = require('../../model/user/create.js')

const now = new Date();
const day = now.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[now.getMonth()];
const year = now.getFullYear();

module.exports = {
    getProducts: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const product = await dataProduct.product();
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/product', {user:user,product:product})
    },
    getSignProducts: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const id = parseInt(req.params.ID)
        const product = await singleProduct.getEditInfproduct(id)
        const dataproduct = await dataProduct.product()
        res.render('./dashboard/single-product',{user:user,product:product[0],dataproduct:dataproduct})
    },
    userReview:async(req,res)=>{
        const userid = parseInt(req.session.userId)
        const productid = parseInt(req.params.ID);
        const message = req.body.message;
        const time=`${month} ${day},${year}`
        const crea = userReview.createReview(userid,productid,message,time);
        res.redirect(`/product/${productid}`)
    }
}