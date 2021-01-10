var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')


/* GET users listing. */
router.get('/login',userController.login);
router.post('/login',userController.loginpost);
router.get('/register',userController.register);
router.post('/register',userController.registerpost);
router.get('/list',userController.userlist);
/*
router.get('/:iduser',userController.profile);
router.get('/:iduser/edit',userController.showedit);
router.post('/:iduser/edit',userController.edit);
router.get('/',userController.menu);
*/
module.exports = router;
