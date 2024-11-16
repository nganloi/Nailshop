const express = require('express')
const app = express()

module.exports = {
    getEditUser: async(req,res) => {
        res.render('./admin/user/edit')
    }
}