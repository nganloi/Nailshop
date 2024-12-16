const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/category/view.js')
const edit = require('../../controller/admin/category/edit.js');
const create = require('../../controller/admin/category/create.js')
const deletet=require('../../controller/admin/category/delete.js')
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
router.get('/',view.getCategori)
// CREATE
router.post('/create',create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',edit.postEdit)
//DELETE
router.get('/delete/:ID',deletet.deletet)
module.exports = router;