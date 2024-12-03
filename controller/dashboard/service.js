const express = require('express')
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getService: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/service',{user:user})
    },
    getServiceDetail: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/service-detail',{user:user})
    }
}