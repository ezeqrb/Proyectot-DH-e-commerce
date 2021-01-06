var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var path = require ("path");
var productsMiddlewares = require ("../controllers/productsMiddlewares")


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/Products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage })
 

router.get ('/' , productsController.list);

router.get ('/list' , productsController.list); 

router.get ('/create' , productsController.create);

router.post ('/create' , upload.any(), productsController.store);

router.get ('/:id' , productsController.details);

router.get ('/:id/edit' , productsController.edit);

router.post ('/:id/edit' ,upload.any(), productsController.storeEdition);

router.get('/delete/:id', productsController.delete);

module.exports = router;