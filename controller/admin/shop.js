const express = require('express')
const app = express()

module.exports = {
    getAdmin: async(req,res) => {
        res.render('./admin/index')
    }
}