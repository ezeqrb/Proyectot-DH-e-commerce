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
 //MANDAR SOLAMENTE LOS PRIMEROS 5 PRODUCTOS !!!!
      
      try {
          let products = await db.Product.findAndCountAll({
            where: {
              Category:'Hombre'
            },
            offset: 0  , //Number(req.query.page) ? Number(req.query.page) + 1 : 0 
            limit: 5     //Number(req.query.page) ? Number(req.query.page) * 5 : 5
            });
          
          res.render('shop', {
            products:products.rows,
            pagina: Number(req.query.page) ? Number(req.query.page) + 1 : 1,
            ruta:req.originalUrl,
            total:products.count
                     
            });
              
      } catch (error) {
          console.log(error); 
          res.status(500).render('error-500', { error });
      }
    },
    mujer: async (req, res) => {
      try {
          let products = await db.Product.findAndCountAll({
            where: {
            Category:'Mujer'
            },
            offset:10,
            limit:2
            });
          
          res.render('shop', {products:products});
      } catch (error) {
          console.log(error);
          res.status(500).render('error-500', { error });
      }
  },
  
  vermas: async (req, res) => {
    try {
      let products = await db.Product.findAndCountAll({
        where: {
          Category:'Hombre'
        },
        offset: Number(req.query.page) ? Number(req.query.page) * 5 : 0 ,
        limit: 6     //Number(req.query.page) ? Number(req.query.page) * 5 : 5
        });

      if(products.rows<6 ){
        products.ro
      
      }

      res.json({
        products:products.rows,
        
      });
          
    }catch (error) {
      console.log(error); 
      res.status(500).render('error-500', { error });
    }
  }
}


module.exports = controller

//Optimizar controladores 3

