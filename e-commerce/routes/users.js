var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')


/* GET users listing. */
router.get('/login',userController.login);
router.post('/login',userController.loginpost);
router.get('/register',userController.register);
router.post('/register',userController.registerpost);
router.get('/list',userController.list);
router.get('/:id',userController.detail);
router.get('/:id/edit',userController.edit);
router.post('/:id/edit',userController.update);
router.post('/:id/delete',userController.delete);
module.exports = router;
