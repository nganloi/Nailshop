const express = require('express')
const router = express.Router();
const Controller = require('../../controller/admin/inforshop/view.js')
const EditController = require('../../controller/admin/inforshop/edit.js')
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
//VIEW
router.get('/', Controller.getShop)
//EDIT
router.get('/edit',EditController.getEdit)
router.post('/edit',upload.single("img"),EditController.postEdit)
module.exports = router;
