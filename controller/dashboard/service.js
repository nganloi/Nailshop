const express = require('express')
const app = express()

module.exports = {
    getService: async(req,res) => {
        res.render('./dashboard/service')
    },
    getServiceDetail: async(req,res) => {
        res.render('./dashboard/service-detail')
    }
}