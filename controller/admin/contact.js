const express = require('express')
const app = express()
const contact = require('../../model/contact/contact.js')
module.exports = {
    getContact: async(req,res) => {
         const data = await contact.getContact();
         const idpage=parseInt(req.params.ID)||1;
         var numberpage='';
         if(data.length> Math.round(data.length/3)*3){
             numberpage= Math.round(data.length/3)+1;
            }else{
                numberpage= Math.round(data.length/3);
            }
         const page=(idpage-1)*3 
        const data1 = await contact.getPage(page,3)
        res.render('./admin/contact/view', {data:data1})
    },
    viewContact: async(req,res) => {
        const id = parseInt(req.params.ID);
        const data = await contact.viewContact(id);
        res.render('./admin/contact/details', {details:data,number:numberpage,page:idpage})
    },
   
    deletContact: async(req,res) => {
        const id = parseInt(req.params.ID);
        const dele = await contact.deletContact(id);
        res.redirect(`/admin/contact`)
    }

}