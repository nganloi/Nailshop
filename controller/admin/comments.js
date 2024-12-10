const express = require('express')
const app = express()
const commentt = require('../../model/blog/view.js')

module.exports = {
    getComment: async(req,res) => {
        const comment = await commentt.getComment()
        res.render('./admin/comments', {comment:comment})
    },
    deleComment: async(req,res) => {
        const id = parseInt(req.params.ID);
        const delePro =  await commentt.getdeleCom(id)
        res.redirect(`/admin/comments`)
    }
}