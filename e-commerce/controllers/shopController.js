const db = require('../database/models')

var controller = {
    cart: function(req, res, next) {
        res.render('cart');
      },
    product: function(req, res, next) {
        res.render('shop');
      },
    shop: function(req, res, next) {
      res.render('shop');
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
    mujer : function (req, res, next){
      db.Product.findAll()
          .then(function(productsDB){
              res.render ("productsList" , {productsDB});
          }).catch(function(error){
              console.log(error)
              res.send('error')
          })
  },
  niño : function (req, res, next){
    db.Product.findAll()
        .then(function(productsDB){
            res.render ('niño' , {productsDB});
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
  },
}

module.exports = controller 