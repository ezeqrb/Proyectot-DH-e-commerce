var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
var user = require('../middlewares/user')
var guess = require('../middlewares/guess')
var admin = require('../middlewares/admin')

/* GET home page. */

router.get('/login' ,indexController.login);
router.post('/login', indexController.authenticate);
router.get('/register',indexController.register);
router.post('/register',indexController.registerpost);
router.get('/', indexController.index);
router.get('/hombre/:size/:colour/:brand', )


module.exports = router ;
