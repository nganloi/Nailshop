const express = require('express')
const app = express()
const delet = require('../../../model/social/delete.js');

module.exports = {
    getDelete:async(req,res) => {
       
        const genId = parseInt(req.params.ID);
        const data = await delet.getDelete(genId)
        res.redirect(`/admin/social`)
    },}