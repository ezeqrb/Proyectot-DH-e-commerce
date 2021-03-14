var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var admin = require('../middlewares/admin')
var user = require('../middlewares/user')

/* GET users listing. */
router.get('/list', admin ,userController.list);
router.get('/:id', user ,userController.detail);
router.get('/:id/edit',admin,userController.edit);
router.post('/:id/edit',admin,userController.update);
router.get('/:id/delete', user , userController.delete);
module.exports = router;
