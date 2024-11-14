const express = require('express')
const app = express()

module.exports = {
    getAbout: async(req,res) => {
        res.render('./dashboard/about')
    }
}