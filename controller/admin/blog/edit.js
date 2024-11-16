const express = require('express')
const app = express()

module.exports = {
    getEditBlog: async(req,res) => {
        res.render('./admin/blog/edit')
    }
}