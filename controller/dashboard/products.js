const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getProducts: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/product', {user:user})
    },
    getSignProducts: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/single-product',{user:user})
    }
}