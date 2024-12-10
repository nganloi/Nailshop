const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const user = require('../../model/user/create.js')
const  userr  = require('../../model/user/view.js');
const checkMail = require('../../model/login/checklogin.js')
const checkPro = require('../../middlewea/checkimg.js')

module.exports = {
    getRegister: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/register', {user:user})
    },

    postRegister: async(req,res) => {
        const anh = req.file ;
        const data = [];
        const img = await checkPro.checkProfile(anh,data)
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = req.body.phone;
        const address = req.body.address;
        const pass1 = req.body.pass;
        const pass =  bcrypt.hashSync(pass1,5)
        const check = await checkMail.checkLogin(mail)
        if(check.length > 0){
            res.redirect(`/register`)
        } else{
        const create = await user.postCreate(img,name,mail,phone,address,pass)
        res.redirect(`/login`)

       }
  
    }
 

}