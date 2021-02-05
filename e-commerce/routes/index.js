var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
var user = require('../middlewares/user')
var guess = require('../middlewares/guess')
var admin = require('../middlewares/admin')
var userValidator = require('../validations/userValidator')

//Home page
router.get('/', indexController.index);
//Formulario de inicio de sesion
router.get('/login', guess ,indexController.login);
router.post('/login',guess, userValidator.loginForm , indexController.authenticate);
router.get('/check',indexController.check);
//Formulario de registro
router.get('/register',guess ,indexController.register);
router.post('/register',guess,indexController.registerpost);


module.exports = router ;
