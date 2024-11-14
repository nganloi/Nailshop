const express = require('express')
const app = express()

module.exports = {
    getProducts: async(req,res) => {
        res.render('./dashboard/product')
    },
    getSignProducts: async(req,res) => {
        res.render('./dashboard/single-product')
    }
}