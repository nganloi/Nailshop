const express = require('express')
const app = express()
const viewModel = require('../../../model/social/view.js')

module.exports = {
    getSocial: async(req,res) => {
     const data = await viewModel.getSocial();
        res.render('./admin/social/view', {data:data})
    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const dataa = await viewModel.getSocial();
        var data = dataa.filter((name) => {
            return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
           res.render('./admin/social/view', {data:data})
       }
}