const express = require('express')
const app = express()
const view= require('../../../model/role/view')
const viewUser=require('../../../model/user/view')
module.exports = {
    getRole: async(req,res) => {
     const data = await view.role() 
     const user=await viewUser.user()
    res.render('./admin/role/view', {data:data,user:user})
    }
}