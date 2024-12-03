const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getCheckout: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/checkout', {user:user})
    }
}