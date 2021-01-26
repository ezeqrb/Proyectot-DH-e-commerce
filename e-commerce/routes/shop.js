var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shopController')

router.get('/cart',shopController.cart);

router.get('/hombre', shopController.hombre);

router.get('/', shopController.shop );


module.exports = router ;