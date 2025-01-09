const express = require('express')
const app = express()
const commentt = require('../../model/blog/view.js')

module.exports = {
    getComment: async(req,res) => {
        const data = await commentt.getComment()
        const idpage=parseInt(req.params.ID)||1;
        var numberpage=''; 
        if(data.length> Math.round(data.length/3)*3){
            numberpage= Math.round(data.length/3)+1;
           }else{
               numberpage= Math.round(data.length/3);
           }
        const page=(idpage-1)*3 
        const comment = await commentt.getPageComment(page,3)
        res.render('./admin/comments', {comment:comment,number:numberpage,page:idpage})
    },
    deleComment: async(req,res) => {
        const id = parseInt(req.params.ID);
        const delePro =  await commentt.getdeleCom(id)
        res.redirect(`/admin/comments`)
    }
}