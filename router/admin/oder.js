const express = require('express')
const router = express.Router();
const view = require('../../controller/admin/oder')
router.get('/', view.getOder)
router.get('/page/:ID', view.getOder)
router.get('/confirm/page/:ID',view.getOderConfirm)
router.get('/:ID',view.checkoder)
module.exports = router;