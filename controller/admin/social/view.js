const express = require('express')
const app = express()
const viewModel = require('../../../model/social/view.js')

module.exports = {
    getSocial: async(req,res) => {
     const data = await viewModel.getSocial();
        res.render('./admin/social/view', {data:data})
    }
}