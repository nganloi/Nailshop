const express = require('express')
const app = express()
const view= require('../../../model/service/view')
const { getSearch } = require('../tag/view')

module.exports = {
    getService: async(req,res) => {
     const data = await view.Service()
        res.render('./admin/service/view', {data:data})
    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const dataa = await view.Service()
        var data = dataa.filter((name) => {
            return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        res.render('./admin/service/view', {data:data})
       },

}