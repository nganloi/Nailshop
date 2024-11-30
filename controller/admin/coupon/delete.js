const express = require('express')
const app = express()
const deletet = require('../../../model/coupon/delete')
module.exports = {
    delete: async(req,res) => {
        const id = parseInt(req.params.ID)
        const deletets = await deletet.delete(id)
        res.redirect('/admin/coupon')
    },
}