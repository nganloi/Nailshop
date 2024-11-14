const express = require('express')
const app = express()

module.exports = {
    getCheckout: async(req,res) => {
        res.render('./dashboard/checkout')
    }
}