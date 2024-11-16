const express = require('express')
const app = express()

module.exports = {
    getUser: async(req,res) => {
        res.render('./admin/user/view')
    }
}