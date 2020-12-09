var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

/* GET users listing. */
router.get('/',productController.hiprod );
router.get('/create',productController.createView );
router.post('/create',productController.create);
router.get('/read',productController.readView );
router.get('/update/:id',productController.updateView);
router.post('/update/:id',productController.update);
router.get('/delete/:id',productController.delete);

module.exports = router;
