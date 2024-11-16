const express = require('express')
const app = express()

module.exports = {
    getForgot: async(req,res) => {
        res.render('./admin/pages/forgot')
    }
}