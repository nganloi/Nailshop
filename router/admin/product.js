const express = require('express');
const router = express.Router();
const product = require('../../controller/admin/product/view.js')
const productEdit = require('../../controller/admin/product/edit.js');
const productCreate = require('../../controller/admin/product/create.js')
// VIEW
router.get('/', product.getProduct)

// CREATE
router.get('/create', productCreate.getCreateProduct)

// CREATE
router.get('/edit', productEdit.getEditProduct)

module.exports = router;