const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

const user = require('../../model/user/create.js')

module.exports = {
    getRegister: async(req,res) => {
        res.render('./dashboard/register')
    },

    postRegister: async(req,res) => {
        const name = req.body.name;
        const mail = req.body.mail;
        const phone = req.body.phone;
        const address = req.body.address;
        const pass1 = req.body.pass;
        const pass =  bcrypt.hashSync(pass1,5)

        
        const create = await user.postCreate(name,mail,phone,address,pass,role)
        res.redirect(`/login`)

    }
 

}