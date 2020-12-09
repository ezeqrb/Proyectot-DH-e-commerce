var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');


router.get ('/list' , productsController.list); 

router.get ('/create' , productsController.create);

router.post ('/create' , productsController.store);

router.get ('/:id' , productsController.details);

router.get ('/:id/edit' , productsController.edit);

router.post ('/:id/edit' , productsController.storeEdition);

router.get('/delete/:id', productsController.delete);

module.exports = router;