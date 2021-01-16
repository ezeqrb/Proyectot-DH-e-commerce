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
            Id: req.body.id,
            Name: req.body.name,
            Price: req.body.price,
            Description: req.body.price,
            Category: req.body.category,
            Size: req.body.size,
            Colour: req.body.color,
            Brand: req.body.brand,
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
        db.Product.update ({
            Name: req.body.Name,
            Price: req.body.Price,
            Description: req.body.Description,
            Category: req.body.Category,
            Size: req.body.Size,
            Colour: req.body.Colour,
            Brand: req.body.Brand,
            Picture: req.files[0].filename
        }, {
            where: {
                Id: req.params.id
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

}
}

module.exports = controller;
