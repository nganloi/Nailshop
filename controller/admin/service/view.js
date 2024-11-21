const express = require('express')
const app = express()
const view= require('../../../model/service/view')

module.exports = {
    getService: async(req,res) => {
     const data = await view.Service()
        res.render('./admin/service/view', {data:data})
    }
}