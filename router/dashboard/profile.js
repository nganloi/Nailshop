const express = require('express')
const router = express.Router();
const profile = require('../../controller/dashboard/profile.js')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './assets/upload/');
  },
  filename: function (req, file, cb) {
    const suffix = file.mimetype.split('/');
    cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
  }
})

const upload = multer({ storage: storage })

router.get('/', profile.getProfile)
router.post('/',upload.single('img'), profile.postProfile)
router.post('/pass',profile.postPass )

module.exports = router;