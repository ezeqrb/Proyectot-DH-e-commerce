const db = require('../database/models')


var controller = {
    cart: function(req, res, next) {
      if (req.session.user){
        db.Cart.findOne({
            where:{
            user_id: req.session.user.id,
            state: "open"}
        })
        .then(function(cart){
            db.cart_products.findAll({
              where:{
                Cart_id: cart
              }
            }) 
            .then (function(r){res.send(r)})
    
        }) 
            .catch (function (error){
                console.log (error)
                res.redirect ("/home")
            })
        .catch(function(error){
            db.Cart.create({
                user_id: req.session.user.id,
                state:"open"
            })
            .then (function(cart){
                cart.addCart_products(req.params.id) 
                .then (res.redirect ("/shop/hombre"))
        
            }) 
          
        }) 
    
    }else{
        let msg= "Para poder comprar es necesario estar logueado"
        res.render ("login" , {msg});
    }
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


      try {
          let products = await db.Product.findAndCountAll({
            where: {
              Category: categ
            },
            offset: 0  , //Number(req.query.page) ? Number(req.query.page) + 1 : 0 
            limit: 6     //Number(req.query.page) ? Number(req.query.page) * 5 : 5
            });
            console.log(products.rows)
          if(products.rows.length = 6){
            products.rows.pop()
            res.render('shop',{
              products:products.rows,
              status:"continue",
              pagina: Number(req.query.page) ? Number(req.query.page) + 1 : 1,   
            })
          }else{
            res.render('shop',{
              products:products.rows,
              status:"stop"
            })
          
          }
              
      } catch (error) {
          console.log(error); 
          res.status(500).render('error-500', { error });
      }
    },
   
  
  vermas: async (req, res) => {
    let cat = toString(req.query.category)
    try {
      let products = await db.Product.findAndCountAll({
        where: {
          Category: cat
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




