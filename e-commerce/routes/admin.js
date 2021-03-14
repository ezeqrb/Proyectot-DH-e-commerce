var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')


router.get('/', adminController.dashboard);
router.get('/userlist', adminController.userList);
router.get('/productslist', adminController.productList);

module.exports = router;