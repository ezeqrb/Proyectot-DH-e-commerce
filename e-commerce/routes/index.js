var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
/* GET home page. */

router.get('/', indexController.index);
router.get('/hombre/:size/:colour/:brand', indexController.hombre)


module.exports = router ;
