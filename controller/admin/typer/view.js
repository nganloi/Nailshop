const express = require('express')
const app = express()
const view= require('../../../model/typer/view.js')
const viewUser=require('../../../model/user/view.js')
module.exports = {
    getType: async(req,res) => {
     const data = await view.typer() 
     const user=await viewUser.user()
    res.render('./admin/typer/view', {data:data,user:user})
    }
}