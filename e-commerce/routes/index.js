var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')
/* GET home page. */

router.get('/', indexController.index);



router.get('/login', indexController.login);


router.get('/home', indexController.home);
router.get('/register',indexController.register);

module.exports = router ;
