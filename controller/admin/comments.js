const express = require('express')
const app = express()
const commentt = require('../../model/blog/view.js')

module.exports = {
    getComment: async(req,res) => {
        const comment = await commentt.getComment()
        res.render('./admin/comments', {comment:comment})
    }
}