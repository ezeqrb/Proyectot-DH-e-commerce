const db = require('../database/models');


let controller = {

    list : function (req, res, next){
        db.Product.findAll()
            .then(function(productsDB){
                res.render ("productsList" , {productsDB});
            }).catch(function(error){
                console.log(error)
                res.send('error')
            })
    },
    create : function (req, res, next){
        res.render ('createProduct');
    },
    store : function (req, res, next){
        console.log (req.body);
        db.Product.create({
            Name: req.body.name,
            Price: req.body.price,
            Description: req.body.description,
            Category: req.body.category,
            Size: req.body.size,
            Colour: req.body.color,
            Brand: req.body.brand,
            Sport: req.body.sport,
            Picture: req.files[0].filename
        });
        res.redirect ("/")
    },
    details: function(req, res) {
        db.Product.findByPk(req.params.id)
            .then(function(product){
                console.log (product)
            res.render('productDetails',{product})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
    },

    
    edit : function (req, res, next){
        db.Product.findByPk(req.params.id)
        .then(function(product){
            console.log (product)
        res.render('editProduct',{product})
    }).catch(function(error){
        console.log(error)
        res.send('error')
    })
    },
    storeEdition : function (req, res, next){
        console.log (req.body)
        console.log (req.files)
        db.Product.update ({
            Name: req.body.Name,
            Price: req.body.Price,
            Description: req.body.Description,
            Category: req.body.Category,
            Size: req.body.Size,
            Colour: req.body.Colour,
            Brand: req.body.Brand,
            Sport: req.body.Sport,
            Picture: req.files[0].filename
        }, {
            where: {
                Id: req.body.Id
            }
        });
        res.redirect ("/products/list")

       
      },

      delete: function(req, res, next) {
        db.Product.destroy ({
            where : {
                Id: req.params.id
            }
        });
        res.redirect ("/products/list");

    },
    addCart: function(req,res,next){
        console.log(typeof(req.body.qty))
        if (req.session.user){
            db.cart.findAll({
                where:{
                user_id: req.session.user.id,
                state: "open"}
            })
            .then(function(params){
                db.cart_product.create({
                    Cart_id:params,
                    Product_id:req.params.id
                })
            res.redirect
            })
            .catch(function(error){
                db.cart.create({
                    user_id: req.session.user.id,
                    state:"open"
                })
                console.log(error)
                res.redirect('/shop/cart')
            })
        
        }
        for(let i = 0; i<parseInt(req.body.cantidad) ;i++){
            db.cart
        }
        
    }
}

module.exports = controller;
