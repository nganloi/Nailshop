const express = require('express')
const app = express()

module.exports = {
    getSignup: async(req,res) => {
        res.render('./admin/pages/signup')
    }
}