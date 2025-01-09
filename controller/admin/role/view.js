const express = require('express')
const app = express()
const view= require('../../../model/role/view')
const viewUser=require('../../../model/user/view')
const { getSearch } = require('../tag/view')
module.exports = {
    getRole: async(req,res) => {
     const data = await view.role() 
     const user=await viewUser.user()
    res.render('./admin/role/view', {data:data,user:user})
    },
    getSearch: async(req,res) => {
        const search = req.query.search;
        const dataa = await view.role() 
        const user=await viewUser.user()
        var data = dataa.filter((name) => {
            return name.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
       res.render('./admin/role/view', {data:data,user:user})
       }
}