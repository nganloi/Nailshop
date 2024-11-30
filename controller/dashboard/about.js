const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getAbout: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        console.log(user)
        res.render('./dashboard/about', {user:user})
    }
}