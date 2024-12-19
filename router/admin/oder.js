const express = require('express')
const router = express.Router();
const view = require('../../controller/admin/oder')
router.get('/', view.getOder)
router.get('/confirm',view.getOderConfirm)
router.get('/:ID',view.checkoder)
module.exports = router;