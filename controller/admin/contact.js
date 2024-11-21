const express = require('express')
const app = express()
const contact = require('../../model/contact/contact.js')
module.exports = {
    getContact: async(req,res) => {
         const data = await contact.getContact();
        res.render('./admin/contact/view', {data:data})
    },
    viewContact: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await contact.viewContact(id);
        res.render('./admin/contact/details', {details:data})
    },
   
    deletContact: async(req,res) => {
        const id = parseInt(req.params.ID);
        const dele = await contact.deletContact(id);
        res.redirect(`/admin/contact`)
    }

}