const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getBlog: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        
        res.render('./dashboard/blog',{user:user})
    },
    getBlogDetail: async(req,res) => {
        const userid = req.session.userid;
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/blog-detail', {user:user})
    }
}