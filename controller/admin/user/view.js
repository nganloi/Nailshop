const express = require('express')
const app = express()
const user = require('../../../model/user/view.js')
module.exports = {
    getUser: async(req,res) => {
       const data = await user.user()
        res.render('./admin/user/view', {data:data})
    }
}