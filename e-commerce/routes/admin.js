var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')
var admin = require('../middlewares/admin')

router.get('/',admin, adminController.dashboard);
router.get('/userlist',admin, adminController.userList);
router.get('/productlist',admin , adminController.productList);

module.exports = router;