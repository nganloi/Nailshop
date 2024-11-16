const express = require('express')
const router = express.Router();
const coupon = require('../../controller/admin/coupon/view.js')
const couponCreate = require('../../controller/admin/coupon/create.js')
const couponEdit = require('../../controller/admin/coupon/edit.js')


router.get('/', coupon.getCoupon)

//CREATE
router.get('/create', couponCreate.getCreateCoupon)

// EDIT
router.get('/edit', couponEdit.getEditCoupon)



module.exports = router;