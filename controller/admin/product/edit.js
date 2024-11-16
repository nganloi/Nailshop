const express = require('express')
const app = express()

module.exports = {
    getEditProduct: async(req,res) => {
        res.render('./admin/product/edit')
    }
}