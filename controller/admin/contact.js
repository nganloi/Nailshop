const express = require('express')
const app = express()
const contact = require('../../model/contact/contact.js')
module.exports = {
    getContact: async(req,res) => {
         const data = await contact.getContact();
        res.render('./admin/contact/view', {data:data})
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
    deletContact: async(req,res) => {
        const id = parseInt(req.params.ID);
        const dele = await contact.deletContact(id);
        res.redirect(`/admin/contact`)
    }

}