const express = require('express')
const app = express()

module.exports = {
    getSignin: async(req,res) => {
        res.render('./admin/pages/signin')
    }
}