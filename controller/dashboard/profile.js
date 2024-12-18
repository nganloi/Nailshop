const express = require('express')
const router = express.Router();
const  userr  = require('../../model/user/view.js');
const checkImg = require('../../middlewea/checkimg.js')
const edit = require('../../model/user/edit.js')
const bcrypt = require('bcrypt')
module.exports = {
    getProfile: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
          res.render('./dashboard/profile', {user:user})
  
      },
      postProfile: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const name = req.body.name;
         const mail = req.body.mail;
         const phone = req.body.phone;
         const add = req.body.address;      
         var anh = req.file;
         var anh = req.file;
         const data = await userr.getProfile(userid)
         const img= await checkImg.checkImg(anh,data.img)
        const viewPro =  await  edit.postProfile(userid,name,mail,phone,add,img)
        return res.redirect(`/profile`)
      },
      postPass: async(req,res) => {
        const userid = parseInt(req.session.userId)
        const oldpass = req.body.oldpass;
        const newpass1 = req.body.newpass;
         const data = await userr.getUser(userid)
         const data1 = await bcrypt.compare(oldpass, data.pass)
        if (!data1) {
            return res.redirect(`/profile?error`)
      } else{
        const newpass = await bcrypt.hash(newpass1,5)
        const viewPro =  await  edit.postPass(userid,newpass)
        return res.redirect(`/profile`)

      }
      
      },


}