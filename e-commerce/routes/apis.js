var express = require('express');
var router = express.Router();
var apisController = require('../controllers/apis/apisController')

router.get ("/countProducts" , apisController.countProducts);

module.exports = router;