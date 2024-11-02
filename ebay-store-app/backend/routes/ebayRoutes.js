const express = require('express');
const { getProduct } = require('../controllers/ebayController');
const router = express.Router();

router.get('/product/:id', getProduct);

module.exports = router;