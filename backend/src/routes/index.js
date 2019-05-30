const express = require('express');
const router = express.Router();
const PalindromoRoutes = require('./palindromo')

/**
 * Here we put all routes of resources
 * if use middlewares for all resource routes, put it here
 */

router.use('/palindromo',PalindromoRoutes)

module.exports = router