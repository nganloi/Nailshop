const express = require('express')
const router = express.Router();
const app = express()
const  userr  = require('../../model/user/view.js');
const  wish = require('../../model/user/delete.js')
module.exports = {
    getWish: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/wishlist',{user:user})
    },
    deletWish:async(req,res)=>{
        const id = parseInt(req.params.ID) ////id trong bang productlike
        const del = await wish.deletWish(id)
        res.redirect('/wishlist')
    }
}