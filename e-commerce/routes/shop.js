var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shopController')

router.get('/cart',shopController.cart);

router.get('/hombre', shopController.hombre);
router.get('/mujer', shopController.mujer);
router.get('/kid', shopController.niño);
router.get('/marcas', shopController.marcas);

router.get('/', shopController.shop );


module.exports = router ;