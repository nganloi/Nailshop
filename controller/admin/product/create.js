const express = require('express')
const app = express()

module.exports = {
    getCreateProduct: async(req,res) => {
        res.render('./admin/product/create')
    }
}