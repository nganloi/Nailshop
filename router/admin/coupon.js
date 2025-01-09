const express = require('express')
const router = express.Router();
const coupon = require('../../controller/admin/coupon/view.js')
const couponCreate = require('../../controller/admin/coupon/create.js')
const couponEdit = require('../../controller/admin/coupon/edit.js')
const deletet = require('../../controller/admin/coupon/delete.js')
router.get('/', coupon.getCoupon)
router.get('/page/:ID', coupon.getCoupon)
//CREATE
router.get('/create', couponCreate.getCreateCoupon)
router.post('/create', couponCreate.postCreateCoupon)
// EDIT
router.get('/edit/:ID', couponEdit.getEditCoupon)
router.post('/edit/:ID', couponEdit.postEditCoupon)
// CHANGE STATUS
router.get('/status/:ID',couponEdit.changeStatus)
//DELETE
router.get('/delete/:ID',deletet.delete)

// search
router.get('/search', coupon.getSearch)
module.exports = router;