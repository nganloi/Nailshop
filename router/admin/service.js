const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/service/view.js')
const edit = require('../../controller/admin/service/edit.js');
const create = require('../../controller/admin/service/create.js')
const deletet=require('../../controller/admin/service/delete.js')
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
router.get('/', view.getService)

//CREATE
router.get('/create', create.getCreate)
router.post('/create',upload.single("img"),create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',upload.single("img"),edit.postEdit)

//DELETE
router.get('/delete/:ID',deletet.deletet)

module.exports = router;