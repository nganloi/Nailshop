const express = require('express')
const app = express()

module.exports = {
    getBlog: async(req,res) => {
        res.render('./admin/blog/view')
    }
}