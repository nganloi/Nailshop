const express = require('express')
const app = express()

module.exports = {
    getShop: async(req,res) => {
        res.render('./admin/index')
    }
}