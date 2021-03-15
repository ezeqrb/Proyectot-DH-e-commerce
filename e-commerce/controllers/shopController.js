const db = require('../database/models')


var controller = {
     cart: function(req, res, next) {
       
      if (req.session.user){
        db.Cart.findOne({
            where:{
            user_id: req.session.user.id,
            state: "open"},
            include: db.Product
        })
            .then (cart => res.render('cart',{cart:cart}))
              
            
    
      //  }) 
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
      
     if(req.params.sex == "hombre" ||req.params.sex == "hombre" || req.params.sex == "hombre"){
        res.render('product');
      }else{
        res.status(500).render('error-500', {error})
      }
     
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
            offset: 0  , 
            limit: 6     //Number(req.query.page) ? Number(req.query.page) * 5 : 5
            });
              if(products.rows.length = 6 ){
                
                products.rows.pop()
                
                res.render('shop', {
                  products:products.rows,
                  pagina: Number(req.query.page) ? Number(req.query.page) + 1 : 1,
                  ruta:req.originalUrl,
                  status:"continue"    
                });
              }else{
                res.render('shop', {
                  products:products.rows,
                  pagina: Number(req.query.page) ? Number(req.query.page) + 1 : 1,
                  ruta:req.originalUrl,
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
        limit: 6     
        });
        console.log(products.rows)
        console.log(products.rows.length)
        if(products.rows.length = 6 ){        
          
          
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
  },
  checkout: function(res,req, next){
    console.log(req.body)
    db.Cart.findOne({
      where:{
      user_id: req.session.user.id,
      state: "open"}
  })
  .then(function(a){
    console.log(a)
    db.Cart.update({
      state: "closed"
  },{
  where: {
    id: a.dataValues.id  
  }
  })
   
  })
  .then (function (s){
    res.redirect ("/home")
  })
  }
}


module.exports = controller





