const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const  cart = require('../../model/user/view.js')
const oder = require('../../model/oder/create.js')
module.exports = {
    getCheckout: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        var carts
        var dataOder
        var count
        var idproduct = []
        const quantity = []
        if(userid >= 0) {
            user = await userr.getUser(userid)
            idproduct = req.body.products
            carts = await cart.getCart(userid)
            if (idproduct > 0) { ////kiểm tra giá trị là một số
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].id == idproduct) {
                        count = carts[i].quantity;
                    }
                }
                quantity.push(req.body[`quantity${idproduct}`])
            } else { //////giá trị idproduct là một chuỗi
                for (var i = 0; i < carts.length; i++) {
                    var check = 0;
                    for (var j = 0; j < idproduct.length; j++) {
                        if (idproduct[j] == carts[i].id) {
                            check = 1;
                        }
                    }
                    if (check == 1) {
                        count = carts[i].quantity;
                        quantity.push(req.body[`quantity${carts[i].id}`])
                    }
                }
            }
            ///// Tạo oder dự kiến cho user
            if (idproduct > 0) {
                const cre = await oder.create(idproduct, quantity, userid,user.address)
            } else {
                if (idproduct.length > 0) {
                    const cre = await oder.create(idproduct, quantity, userid,user.address)
                }

            }
            dataOder = await oder.getOder(userid)
        }
        res.render('./dashboard/checkout', {user:user,dataoder:dataOder[0]})
    },
    oder:async(req,res)=>{
        const userid = parseInt(req.session.userId)
        const oderid = parseInt(req.params.ID)
        const address = req.query.address;
        const up = await oder.oder(userid,oderid,address)
        res.redirect('/cart/oder-confirm')
    },
}