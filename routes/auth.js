const express = require('express')
const router = express.Router()
const registerCb = require('../controller/authCtr')

router.post('/', registerCb);

module.exports = router;