const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/blog/view.js')
const edit = require('../../controller/admin/blog/edit.js');
const create = require('../../controller/admin/blog/create.js')
const deletet=require('../../controller/admin/blog/delete.js')
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
router.get('/', view.getBlog)

//CREATE
router.get('/create', create.getCreate)
router.post('/create',upload.single("img"),create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',upload.single("img"),edit.postEdit)

//DELETE
router.get('/delete/:ID',deletet.deletet)

module.exports = router;