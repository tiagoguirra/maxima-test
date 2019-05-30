const express = require('express');
const router = express.Router();
const Controller = require('../controllers/http/PalindromoController')

/**
 * Here we put all routes of albuns resource
 * if use middlewares for some routes, put it here
 */

router.get('/',Controller.index)
router.get('/:id',Controller.show)
router.post('/',Controller.analize)

module.exports = router