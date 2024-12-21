const express = require('express');
const app = express()
const userr = require('../../model/user/view.js');
const cart = require('../../model/user/view.js')
const oder = require('../../model/oder/create.js')
const oderr = require('../../model/oder/view.js')
const coupon = require('../../model/coupon/view.js');
module.exports = {
    getCheckout: async (req, res) => {
        const userid = parseInt(req.session.userId)
        let user
        var carts
        var dataOder
        var count
        var idproduct = []
        const quantity = []
        var coupons = []
        var coupons1 = []

        if (userid >= 0) {
            user = await userr.getUser(userid)
            ///XỬ LÍ TẠO ODER
            idproduct = req.body.products
            carts = await cart.getCart(userid)
            if (idproduct > 0 && idproduct != undefined) { ////kiểm tra giá trị là một số
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].id == idproduct) {
                        count = carts[i].quantity;
                    }
                }
                quantity.push(req.body[`quantity${idproduct}`])
            } else if (idproduct != undefined) { //////giá trị idproduct là một chuỗi
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
                const cre = await oder.create(idproduct, quantity, userid, user.address)
            } else {
                if (idproduct != undefined && idproduct.length > 0) {
                    const cre = await oder.create(idproduct, quantity, userid, user.address)
                }

            }
            dataOder = await oder.getOder(userid)
            var sum = 0
            for (var i = 0; i < dataOder[0].product.length; i++) {
                sum = sum + (dataOder[0].product[i].quantity * dataOder[0].product[i].product.price
                    - dataOder[0].product[i].quantity * (dataOder[0].product[i].product.price * parseInt(dataOder[0].product[i].product.discount) / 100)
                )
            }
        }
        ///XỬ LÍ COUPONCOUPON

        //Lấy coupon người dùng được xử dụngdụng
        const datacoupon1 = await coupon.getCoupon(userid)
        const datacoupon2 = datacoupon1.filter(
            (value, index, self) =>
                index === self.findIndex((obj) => obj.id === value.id)
        );

        //Lấy coupon oder được dùng
        if (datacoupon2.length > 0) {
            for (var i = 0; i < datacoupon2.length; i++) {
                if (datacoupon2[i].product.length == 0 && datacoupon2[i].category.length == 0) {
                    coupons1.push(datacoupon2[i])
                }
                if (datacoupon2[i].product.length > 0) {
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < datacoupon2[i].product.length; k++) {
                            if (dataOder[0].product[j].productid == datacoupon2[i].product[k].productid) {
                                coupons1.push(datacoupon2[i])
                            }

                        }
                    }
                }
                if (datacoupon2[i].category.length > 0) {
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < datacoupon2[i].category.length; k++) {
                            if (dataOder[0].product[j].product.category[0].categoryid == datacoupon2[i].category[k].categoryid) {
                                coupons1.push(datacoupon2[i])
                            }
                        }
                    }
                }

            }
        }
        coupons = coupons1.filter(
            (value, index, self) =>
                index === self.findIndex((obj) => obj.id === value.id)
        );
        res.render('./dashboard/checkout', { user: user, dataoder: dataOder[0], couponns: coupons, sum: sum, save: 0 })
    },

    oder: async (req, res) => {
        const userid = parseInt(req.session.userId)
        const oderid = parseInt(req.params.ID)
        const address = req.query.address;
        const up = await oder.oder(userid, oderid, address)
        res.redirect('/cart/oder-confirm')
    },
    postCoupon: async (req, res) => {
        const id = parseInt(req.params.ID);
        const idcoupon = parseInt(req.body.coupon);
        const create = await coupon.postOrderCoupon(id,idcoupon)
        res.redirect(`/checkout`)

    },
    getCheckoutcoupon: async (req, res) => {
        const userid = parseInt(req.session.userId)
        let user
        var dataOder
        var coupons = []
        var save = 0
        dataOder = await oder.getOder(userid)
        var sum = 0
        var coupons1=[]
        if (userid >= 0) {
            user = await userr.getUser(userid)
        }
        for (var i = 0; i < dataOder[0].product.length; i++) {
            sum = sum + (dataOder[0].product[i].quantity * dataOder[0].product[i].product.price
                - dataOder[0].product[i].quantity * (dataOder[0].product[i].product.price * parseInt(dataOder[0].product[i].product.discount) / 100)
            )
        }
        ///XỬ LÍ COUPONCOUPON

        //Lấy coupon người dùng được xử dụngdụng
        const datacoupon1 = await coupon.getCoupon(userid)
        const datacoupon2 = datacoupon1.filter(
            (value, index, self) =>
                index === self.findIndex((obj) => obj.id === value.id)
        );

        //Lấy coupon oder được dùng
        if (datacoupon2.length > 0) {
            for (var i = 0; i < datacoupon2.length; i++) {
                if (datacoupon2[i].product.length == 0 && datacoupon2[i].category.length == 0) {
                    coupons1.push(datacoupon2[i])
                }
                if (datacoupon2[i].product.length > 0) {
                    
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < datacoupon2[i].product.length; k++) {
                            if (dataOder[0].product[j].productid == datacoupon2[i].product[k].productid) {
                                coupons1.push(datacoupon2[i])
                            }

                        }
                    }
                }
                if (datacoupon2[i].category.length > 0) {
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < datacoupon2[i].category.length; k++) {
                            if (dataOder[0].product[j].product.category[0].categoryid == datacoupon2[i].category[k].categoryid) {
                                coupons1.push(datacoupon2[i])
                            }
                        }
                    }
                }

            }
        }
        //Lọc các coupon bị trùng 
        coupons = coupons1.filter(
            (value, index, self) =>
                index === self.findIndex((obj) => obj.id === value.id)
        );
        //Tính số tiền được giảm 
        if (dataOder[0].coupon.length > 0) {
                if (dataOder[0].coupon[0].coupon.product.length == 0 && dataOder[0].coupon[0].coupon.category.length == 0) {
                    if(parseInt(dataOder[0].coupon[0].coupon.discountpercent) > 0){
                        save=parseInt(dataOder[0].coupon[0].coupon.discountpercent)*sum/100;
                    }else{
                        save=parseInt(dataOder[0].coupon[0].coupon.discountprice)
                    }
                }
                if (dataOder[0].coupon[0].coupon.product.length > 0) {
                    var sumProduct=0;
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < dataOder[0].coupon[0].coupon.product.length; k++) {
                            if (dataOder[0].product[j].productid == dataOder[0].coupon[0].coupon.product[k].productid) {
                                sumProduct=sumProduct + dataOder[0].product[j].quantity*(dataOder[0].product[j].product.price-dataOder[0].product[j].product.price*parseInt(dataOder[0].product[j].product.discount)/100)
                            }

                        }
                    }
                    if(parseInt(dataOder[0].coupon[0].coupon.discountpercent) > 0){
                        save=parseInt(dataOder[0].coupon[0].coupon.discountpercent)*sumProduct/100;
                    }else{
                        save=parseInt(dataOder[0].coupon[0].coupon.discountprice)
                    }
                }
                if (dataOder[0].coupon[0].coupon.category.length > 0) {
                    var sumCategory=0;
                    for (var j = 0; j < dataOder[0].product.length; j++) {
                        for (var k = 0; k < dataOder[0].coupon[0].coupon.category.length; k++) {
                            if (dataOder[0].product[j].categoryid == dataOder[0].coupon[0].coupon.category[k].categoryid) {
                                sumCategory=sumCategory + dataOder[0].product[j].quantity*(dataOder[0].product[j].product.price-dataOder[0].product[j].product.price*parseInt(dataOder[0].product[j].product.discount)/100)
                            }

                        }
                    }
                    if(parseInt(dataOder[0].coupon[0].coupon.discountpercent) > 0){
                        save=parseInt(dataOder[0].coupon[0].coupon.discountpercent)*sumCategory/100;
                    }else{
                        save=parseInt(dataOder[0].coupon[0].coupon.discountprice)
                    }
                }
        }
        console.log("sum",sum ,"save",save,"coupon",dataOder[0].coupon[0].coupon.name)
        res.render('./dashboard/checkout', { user: user, dataoder: dataOder[0], couponns: coupons, sum: sum, save: save })
    },


}