const express = require('express')
const router = express.Router();
const app = express()

module.exports = {
    getShop: async(req,res) => {
        res.render('./dashboard/index')
    }
}