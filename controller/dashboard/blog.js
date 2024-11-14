const express = require('express')
const app = express()

module.exports = {
    getBlog: async(req,res) => {
        res.render('./dashboard/blog')
    },
    getBlogDetail: async(req,res) => {
        res.render('./dashboard/blog-detail')
    }
}