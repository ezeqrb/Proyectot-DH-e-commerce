var express = require('express');
var router = express.Router();
var shopController = require('../controllers/shopController')

router.get('/cart',shopController.cart);

router.get('/hombre', shopController.genero);
router.get('/mujer', shopController.genero);
router.get('/kid', shopController.genero);
router.get('/marcas', shopController.marcas);
router.get('/product', shopController.product)


// ** API ** // 
router.get('/vermas', shopController.vermas);
router.get('/checkout', shopController.checkout);



module.exports = router ;