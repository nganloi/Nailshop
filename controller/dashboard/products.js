const express = require('express');
const app = express()
const  userr  = require('../../model/user/view.js');
const  dataProduct = require('../../model/product/view.js')
const  singleProduct = require('../../model/product/edit.js')
const  userReview = require('../../model/user/create.js')
const  createProduct = require('../../model/product/create.js')
const deleteProduct = require('../../model/product/delete.js')
const category = require('../../model/category/view.js')
const now = new Date();
const day = now.getDate();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[now.getMonth()];
const year = now.getFullYear();

module.exports = {
    getProducts: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const product = await dataProduct.product();
        const cate = await category.category()
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/product', {user:user,product:product, cate:cate,selected:product })
    },
    getSearch: async(req,res) => {
      const search = req.query.search;
      const userid = parseInt(req.session.userId)
      const products = await dataProduct.product();
      const cate = await category.category()
      let user
      if(userid >= 0) {
          user = await userr.getUser(userid)
      }
      var product = products.filter((name) => {
        return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
      res.render('./dashboard/product', {user:user,product:product, cate:cate, selected:products})
  },
  getSearchCate: async(req,res) => {
    const categ = parseInt(req.query.category);
    const userid = parseInt(req.session.userId)
    const cate = await category.category()
    let user
    if(userid >= 0) {
        user = await userr.getUser(userid)
    }
    const product = await dataProduct.getSearchCate(categ)
   
    res.render('./dashboard/product', {user:user,product:product, cate:cate, selected: categ})
},
getSearchPrice: async(req,res) => {
  const price1 = parseInt(req.query.price1) || 0;
  const price2= parseInt(req.query.price2) || Infinity;
  const userid = parseInt(req.session.userId)
  const cate = await category.category()
  let user
  if(userid >= 0) {
      user = await userr.getUser(userid)
  }
  const product = await dataProduct.getSearchPrice(price1,price2)
 
  res.render('./dashboard/product', {user:user,product:product, cate:cate, selected:product})
},
    getSignProducts: async (req, res) => {
        const userid = parseInt(req.session.userId);
        let user;
        if (userid >= 0) {
          user = await userr.getUser(userid);
        }
      
        const id = parseInt(req.params.ID);
      
        try {
          const product = await singleProduct.getEditInfproduct(id);
      
          if (req.query.format === 'json') {
            // Nếu request là API, trả về dữ liệu JSON
            return res.json(product);
          }
      
          const dataproduct = await dataProduct.product();
          res.render('./dashboard/single-product', { user: user, product: product[0], dataproduct: dataproduct });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Lỗi khi truy vấn cơ sở dữ liệu' });
        }
      },
    userReview:async(req,res)=>{
        const userid = parseInt(req.session.userId)
        const productid = parseInt(req.params.ID);
        const message = req.body.message;
        const time=`${month} ${day},${year}`
        const crea =await userReview.createReview(userid,productid,message,time);
        res.redirect(`/product/${productid}`)
    },
    ///Xử lí thông tin cartcart
    cart:async(req,res)=>{
      const userid = parseInt(req.session.userId);
      const productid = parseInt(req.params.ID)
      const classfyid = parseInt(req.body.product)
      const quantity= req.body.quantity
      const creat = await createProduct.creatCart(userid,productid,classfyid,quantity);
      res.redirect(`/product/${productid}`)
    },
    deleteCart:async(req,res)=>{
      const previousURL = req.get('Referrer');
      const idpage = previousURL.split("/").pop();
      const id = parseInt(req.params.ID) ////ID của bảng user_product
      const del = await deleteProduct.deleteCart(id)
      res.redirect(`/product/${idpage}`)
    },

    /////SAN PHAM YEU THICH
    creatWish:async(req,res)=>{
      const userid = parseInt(req.session.userId);
      const productid = parseInt(req.params.ID)
      const cret = await createProduct.creatWish(userid,productid)
      res.redirect(`/product/${productid}`)
    }
}