const express = require('express')
const app = express()

module.exports = {
    getPrivacy: async(req,res) => {
        res.render('./admin/pages/privacy')
    }
}