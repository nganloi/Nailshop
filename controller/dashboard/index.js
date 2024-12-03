const express = require('express')
const app = express()
const blogg = require('../../model/blog/view.js')

module.exports = {
    getShop: async(req,res) => {
        const blog = await blogg.Blog()
        res.render('./dashboard/index', {blog:blog})
    }
}