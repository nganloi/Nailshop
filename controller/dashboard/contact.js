const express = require('express')
const app = express()
const contact = require('../../model/contact/contact.js');
const  userr  = require('../../model/user/view.js');

module.exports = {
    getContact: async(req,res) => {
        const userid = parseInt(req.session.userId)
        let user
        if(userid >= 0) {
            user = await userr.getUser(userid)
        }
        res.render('./dashboard/contact', {user:user})
    },
    postContact: async(req,res) => {
        const name = req.body.name;
        const email = req.body.email;
        const phone = parseInt(req.body.phone);
        const subject = req.body.subject;
        const message = req.body.message;
        const creat = await contact.postContact(name,email,phone,subject,message);
        res.redirect(`/`)

    },

}