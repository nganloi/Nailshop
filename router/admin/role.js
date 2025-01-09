const express = require('express');
const router = express.Router();
const view = require('../../controller/admin/role/view.js')
const edit = require('../../controller/admin/role/edit.js');
const create = require('../../controller/admin/role/create.js')
const deletet=require('../../controller/admin/role/delete.js')
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
router.get('/',view.getRole)
// CREATE
router.post('/create',create.postCreate)
// EDIT
router.get('/edit/:ID', edit.getEdit)
router.post('/edit/:ID',edit.postEdit)
//DELETE
router.get('/delete/:ID',deletet.deletet)

//search
router.get('/search', view.getSearch)
module.exports = router;