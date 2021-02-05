var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var path = require ("path");
/*var productsMiddlewares = require ("../middlewares/products/productsMiddlewares")*/
var admin = require('../middlewares/admin')
var user = require('../middlewares/user')

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
 


//Listado de productos
router.get ('/' ,admin , productsController.list);
router.get ('/list',admin , productsController.list); 

router.get ('/create' , admin , productsController.create);

router.post ('/create' , admin, upload.any(), productsController.store);

router.get ('/:id', productsController.details);

router.get ('/:id/edit',admin , productsController.edit);

router.post ('/:id/edit', admin ,upload.any(), productsController.storeEdition);

router.get('/delete/:id',admin, productsController.delete);

module.exports = router;