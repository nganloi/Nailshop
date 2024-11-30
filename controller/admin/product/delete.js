const express = require('express')
const app = express()
const deletes = require('../../../model/product/delete')
module.exports = {
    delete: async(req,res) => {
        const id = parseInt(req.params.ID)
        const del= await deletes.delete(id)
        res.redirect('/admin/product')
    }
}