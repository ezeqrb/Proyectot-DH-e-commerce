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
    genero: async (req, res) => {
 //MANDAR SOLAMENTE LOS PRIMEROS 5 PRODUCTOS !!!!
        let categ = req.path.replace('/', '')
        console.log(categ)
       


      try {
          let products = await db.Product.findAndCountAll({
            where: {
              Category: categ
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
   
  
  vermas: async (req, res) => {
    
    try {
      let products = await db.Product.findAndCountAll({
        where: {
          Category: 'Hombre'
        },
        offset: Number(req.query.page) ? Number(req.query.page) * 5 : 0 ,
        limit: 6     //Number(req.query.page) ? Number(req.query.page) * 5 : 5
        });
        
        if(products.rows.length = 6 ){        
          console.log(products.count)
          console.log(products.rows.length)
          products.rows.pop()
          let status = "continue" 
          res.json({status,products:products.rows})

        }else {
          console.log(products.count)
          let status = "stop"
          res.json({status,products:products.rows})
        }


    }catch (error) {
      console.log(error); 
      res.status(500).render('error-500', { error });
    }
  }
}


module.exports = controller

//Optimizar controladores 3 Listo 
// Optimizar vermas api  3 




