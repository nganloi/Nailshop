const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const dataProduct = require('../../model/product/view.js')
module.exports = {
    getCart: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const dataproduct =await dataProduct.product()
        res.render('./dashboard/cart', {user:user,dataproduct:dataproduct})
    },
    getOderConfirm:async(req,res)=>{
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const dataproduct =await dataProduct.product()
        const dataOder = await userr.getOderConfirm(userid)
        res.render('./dashboard/oder-confirm', {user:user,dataproduct:dataproduct,dataoder:dataOder})

    }
}