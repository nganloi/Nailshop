const express = require('express')
const app = express()
const  bcrypt = require('bcrypt')
const login = require('../../model/login/checklogin.js')
const  userr  = require('../../model/user/view.js');

module.exports = {
    getLogin: async(req,res) => {
      const userid = parseInt(req.session.userId)
      let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/login', {user:user})
    },

    postLogin: async(req,res) => {
      const mail = req.body.mail;
      const pass1 = req.body.pass;
      const user = await login.checkLogin(mail)
      const checkpass =await bcrypt.compare(pass1, user[0].pass)
        console.log(user,checkpass)
      if(user.length > 0  && checkpass){
        req.session.userId = user[0].id;
        res.redirect('/');
      } else{
        res.redirect('/login')
      }

    }
 

}