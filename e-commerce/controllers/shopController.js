const db = require('../database/models')

var controller = {
    cart: function(req, res, next) {
        res.render('cart');
      },
    product: function(req, res, next) {
      res.render('product');
      /*
     if(req.params.sex == "hombre" ||req.params.sex == "hombre" || req.params.sex == "hombre"){
        res.render('product');
      }else{
        res.status(500).render('error-500', {error})
      }
      */
    },
    shop: function(req, res, next) {
      res.render('shop');
    }, 
    marcas: function(req, res, next) {
      res.render('marcas');
    },
    hombre: async (req, res) => {
      try {
          let products = await db.Product.findAll({where: {
            Category:'Hombre'
          }});
          
          res.render('shop', {products:products});
      } catch (error) {
          console.log(error);
          res.status(500).render('error-500', { error });
      }
    },
    mujer: async (req, res) => {
      try {
          let products = await db.Product.findAll({where: {
            Category:'Mujer'
          }});
          
          res.render('shop', {products:products});
      } catch (error) {
          console.log(error);
          res.status(500).render('error-500', { error });
      }
  },
  
  niño: async (req, res) => {
    try {
        let products = await db.Product.findAll({where: {
          Category:'Niño'
        }});
        
        res.render('shop', {products:products});
    } catch (error) {
        console.log(error);
        res.status(500).render('error-500', { error });
    }
  }
}


module.exports = controller