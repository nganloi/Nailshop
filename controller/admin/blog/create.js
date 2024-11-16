const express = require('express')
const app = express()

module.exports = {
    getCreateBlog: async(req,res) => {
        res.render('./admin/blog/create')
    }
}