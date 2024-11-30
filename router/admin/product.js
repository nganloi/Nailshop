const express = require('express');
const router = express.Router();
const product = require('../../controller/admin/product/view.js')
const productEdit = require('../../controller/admin/product/edit.js');
const productCreate = require('../../controller/admin/product/create.js')
const deletes = require('../../controller/admin/product/delete.js')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/upload/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage }); 

// VIEW
router.get('/', product.getProduct)
// CREATE
router.get('/create', productCreate.getCreateProduct)
router.post('/create',upload.array("img",5),productCreate.postCreate)
router.get('/classfys',productCreate.getFalse)
router.get('/discount', productCreate.getFalse)

// EDIT
router.get('/edit/:ID', productEdit.getEditProduct)//ID của product
router.post('/edit/:ID',upload.array("img",5), productEdit.postEditProduct)//ID của product
///EDIT CLASSFY
router.get('/classfys/:ID', productEdit.getclassfys)//ID của product
router.post('/create/classfys/:ID', productEdit.postclassfys)//ID của product
router.get('/delete/classfys/:ID', productEdit.deleteclassfys)//ID của classfys
router.post('/edit/classfys/:ID', productEdit.editclassfys)//ID của classfys
///EDIT DISCOUNT
router.get('/discount/:ID', productEdit.getdiscount)
router.post('/edit/discount/:ID', productEdit.editdiscount)
router.post('/edit/discount-coupon/:ID',productEdit.changeCoupon)//ID của product thay đổi coupon áp dụng cho prouduct
router.get('/delete/discount-coupon/:ID', productEdit.deleteCoupon)//ID của product
router.post('/edit/discount-category/:ID',productEdit.changeCategory)//ID của product 
///CHANEG STATUS
router.get('/status/:ID',productEdit.changeStatus)

///DELETE PRODUCT
router.get('/delete/:ID',deletes.delete)
module.exports = router;