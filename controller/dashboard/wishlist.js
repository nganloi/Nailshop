const express = require('express')
const router = express.Router();
const app = express()
const  userr  = require('../../model/user/view.js');
const  wishlist = require('../../model/user/delete.js')
const dataProduct = require('../../model/product/view.js')
module.exports = {
    getWish: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        const dataproduct = await dataProduct.product();
        res.render('./dashboard/wishlist',{user:user,dataproduct:dataproduct})
    },
    deleteWish:async(req,res)=>{
        const id = parseInt(req.params.ID) ////id trong bang productlike
        const del = await wishlist.deleteWish(id)
        res.redirect('/wishlist')
    }
}