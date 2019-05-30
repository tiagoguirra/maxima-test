const express = require('express');
const router = express.Router();

const RequestMiddleware = require('./RequestMiddleware')
const ResponseMiddleware = require('./ResponseMiddleware')

router.use('/',RequestMiddleware)
router.use('/',ResponseMiddleware)

module.exports = router