const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const user = require('../../model/user/create.js')
const  userr  = require('../../model/user/view.js');

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
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = req.body.phone;
        const address = req.body.address;
        const pass1 = req.body.pass;
        const pass =  bcrypt.hashSync(pass1,5)
        

        
        const create = await user.postCreate(name,mail,phone,address,pass)
        res.redirect(`/login`)

    }
 

}