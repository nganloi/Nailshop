const express = require('express')
const app = express()
const view=require('../../../model/inforshop/view')
module.exports = {
    getShop: async(req,res) => {
        const data=await view.getInforshop()
        res.render('./admin/inforshop/inforshop',{data:data})
    }
}