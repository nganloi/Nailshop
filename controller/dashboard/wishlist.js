const express = require('express')
const router = express.Router();
const app = express()
const  userr  = require('../../model/user/view.js');

module.exports = {
    getWish: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/wishlist',{user:user})
    }
}