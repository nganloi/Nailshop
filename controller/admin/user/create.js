const express = require('express')
const app = express()

module.exports = {
    getCreateUser: async(req,res) => {
        res.render('./admin/user/create')
    }
}