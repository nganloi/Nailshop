const express = require('express')
const app = express()

module.exports = {
    getComment: async(req,res) => {
        res.render('./admin/comments')
    }
}