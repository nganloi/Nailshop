const express = require('express')
const app = express()
const edit = require('../../../model/user/edit.js')

module.exports = {
    getEdit: async(req,res) => {
        const genId = parseInt(req.params.ID);
        const data = await edit.getEdit(genId)
        res.render('./admin/user/edit',{edit:data})
    },
}