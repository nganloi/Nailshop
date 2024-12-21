const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const  cart = require('../../model/user/view.js')
const oder = require('../../model/oder/create.js')
const oderr= require('../../model/oder/view.js')
const coupon = require('../../model/coupon/view.js');
const { console } = require('inspector');
module.exports = {
    getCheckout: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        var carts
        var dataOder
        var count
        var idproduct = []
        const quantity = []
        var coupons=[]
        if(userid >= 0) {
            user = await userr.getUser(userid)
            idproduct = req.body.products
            carts = await cart.getCart(userid)
            if (idproduct > 0 && idproduct != undefined) { ////kiểm tra giá trị là một số
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].id == idproduct) {
                        count = carts[i].quantity;
                    }
                }
                quantity.push(req.body[`quantity${idproduct}`])
            } else if(idproduct != undefined){ //////giá trị idproduct là một chuỗi
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
            if (idproduct > 0 && idproduct != undefined) {
                const cre = await oder.create(idproduct, quantity, userid,user.address)
            } else {
                if ( idproduct != undefined &&  idproduct.length > 0 ) {
                    const cre = await oder.create(idproduct, quantity, userid,user.address)
                }

            }
            dataOder = await oder.getOder(userid)
            console.log('1',dataOder )
            var sum = 0
            for (var i = 0; i < dataOder.length; i++) {
                sum = sum + (parseInt(dataOder[i].product.quantity) * parseInt(dataOder[i].product.price)
                    - parseInt(dataOder[i].product.quantity) * (parseInt(dataOder[i].product.price) * parseInt(dataOder[i].product.discount) / 100)
                )
            }
        }
        console.log(sum)
        const couponn = await coupon.getCoupon(userid)
      
        for(var i=0; i<couponn.length;i++){
            if(couponn[i].category.length == 0 && couponn[i].product.length == 0){
                coupons.push(couponn[i])
        }}
        datacoupon=couponn.filter(item => {
            const coupon = item.coupon;
            return !coupon || !Array.isArray(category) || coupon.category.length === 0 || 
                             !Array.isArray(coupon.product) || coupon.product.length === 0;
          });

          for (var i = 0; i < datacoupon.length; i++) {
            if(datacoupon[i].product.length > 0){
                 for(var j=0; j < datacoupon[i].product.length; j++){
                    let check2=0;
                    for(var z=0; z < data.length ;z++){
                        if(datacoupon[i].product[j].productid == data[z].product.id){
                            check2++;
                        }
                    }
                    if(check2 != 0){
                        coupons.push(datacoupon[i])
                    }
                    if(datacoupon.length == 0){
                        break;
                    }
                }
            }
        } 
        for (var i = 0; i < datacoupon.length; i++) {
            if(datacoupon[i].category.length > 0){
                for (var k = 0; k < datacoupon[i].category.length; k++) {
                    var check1=0;
                   for (var z = 0; z < data.length; z++) {
                       if (datacoupon[i].category[k].categoryid == data[z].product.categoryid){
                              check1++;
                       }
                   }
                   if(check1 != 0){
                    coupons.push(datacoupon[i])
                }
                   if(datacoupon.length == 0){
                    break;
                   }

               }       
            }
            
        }
        res.render('./dashboard/checkout', {user:user,dataoder:dataOder[0], couponns:couponn, coupon:coupons,sum:sum,save:0})
    },
    oder:async(req,res)=>{
        const userid = parseInt(req.session.userId)
        const oderid = parseInt(req.params.ID)
        const address = req.query.address;
        const up = await oder.oder(userid,oderid,address)
        res.redirect('/cart/oder-confirm')
    },
    postCoupon: async(req,res) => {
        const id = parseInt(req.params.ID);
        const idcoupon = parseInt(req.body.coupon);
     
        const create = await coupon.postOrderCoupon(id,idcoupon)
        res.redirect(`/checkout`)

    },
    getCheckoutcoupon: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        var carts
        var dataOder
        var coupons=[]
       
            dataOder = await oder.getOder(userid)
            var sum = 0
            for (var i = 0; i < dataOder.length; i++) {
                sum = sum + (parseInt(dataOder[i].product.quantity) * parseInt(dataOder[i].product.price)
                    - parseInt(dataOder[i].product.quantity) * (parseInt(dataOder[i].product.price) * parseInt(dataOder[i].product.discount) / 100)
                )
            }
        
        const couponn = await coupon.getCoupon(userid,sum)
        for(var i=0; i<couponn.length;i++){
            if(couponn[i].category.length == 0 && couponn[i].product.length == 0){
                coupons.push(couponn[i])
        }}
        datacoupon=couponn.filter(item => {
            const coupon = item.coupon;
            return !coupon || !Array.isArray(category) || coupon.category.length === 0 || 
                             !Array.isArray(coupon.product) || coupon.product.length === 0;
          });

          for (var i = 0; i < datacoupon.length; i++) {
            if(datacoupon[i].product.length > 0){
                 for(var j=0; j < datacoupon[i].product.length; j++){
                    let check2=0;
                    for(var z=0; z < data.length ;z++){
                        if(datacoupon[i].product[j].productid == data[z].product.id){
                            check2++;
                        }
                    }
                    if(check2 != 0){
                        coupons.push(datacoupon[i])
                    }
                    if(datacoupon.length == 0){
                        break;
                    }
                }
            }
        } 
        for (var i = 0; i < datacoupon.length; i++) {
            if(datacoupon[i].category.length > 0){
                for (var k = 0; k < datacoupon[i].category.length; k++) {
                    var check1=0;
                   for (var z = 0; z < data.length; z++) {
                       if (datacoupon[i].category[k].categoryid == data[z].product.categoryid){
                              check1++;
                       }
                   }
                   if(check1 != 0){
                    coupons.push(datacoupon[i])
                }
                   if(datacoupon.length == 0){
                    break;
                   }

               }       
            }
            
        }
        idoder = await oderr.getoder(userid)
        const datas = await userr.useraddress(userid)
        const couponoder=await coupon.getConponoder(idoder[0].id)
        var save=0;
            if(couponoder.length != 0){
            if(couponoder[0].coupon.category.length == 0 && couponoder[0].coupon.product.length == 0){
                if(parseInt(couponoder[0].coupon.discountpercent) > 0){
                    save=parseInt(couponoder[0].coupon.discountpercent)*sum/100;
                }else{
                    save=parseInt(couponoder[0].coupon.discountprice)
                }
            }
            if(couponoder[0].coupon.category.length > 0){
                var sumcategory=0;
                for(var i=0; i < couponoder[0].coupon.category.length;i++ ){
                    for (var z = 0; z < data.length; z++) {
                        if (couponoder[0].coupon.category[i].categoryid == data[z].product.categoryid){
                               sumcategory=sumcategory + parseInt(data[z].quantity)*(parseInt(data[z].product.price)-parseInt(data[z].product.price)*parseInt(data[z].product.discount)/100)
                        }
                    } 
                }
                if(parseInt(couponoder[0].coupon.discountpercent) > 0){
                    save=parseInt(couponoder[0].coupon.discountpercent)*sumcategory/100;
                }else{
                    save=parseInt(couponoder[0].coupon.discountprice)
                }
            }
            if(couponoder[0].coupon.product.length > 0){
                console.log(1)
                var sumproduct=0;
                for(var i=0; i < couponoder[0].coupon.product.length;i++ ){
                    for (var z = 0; z < data.length; z++) {
                        if (couponoder[0].coupon.product[i].productid == data[z].productid){
                               sumproduct=sumproduct + parseInt(data[z].quantity)*(parseInt(data[z].product.price)-parseInt(data[z].product.price)*parseInt(data[z].product.discount.name)/100)
                        }
                    } 
                }
                if(parseInt(couponoder[0].coupon.discountpercent) > 0){
                    save=parseInt(couponoder[0].coupon.discountpercent)*sumproduct/100;
                }else{
                    save=parseInt(couponoder[0].coupon.discountprice)
                }
            }
        }
        res.render('./dashboard/checkout', {user:user,dataoder:dataOder[0], coupon:couponn, coupon:coupons,sum:sum,save:save,couponoder:couponoder})
    },

   
}