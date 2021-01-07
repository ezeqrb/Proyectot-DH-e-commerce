let fs = require ('fs');
let products = JSON.parse (fs.readFileSync (__dirname + '/../data/products.json'))
let db = require ("../database/models");

let controller = {

    list : function (req, res, next){
        db.product.findAll ()
            .then (function(productsDB){
                res.render ("productsList" , {productsDB});
            })
    },
    create : function (req, res, next){
        res.render ('createProduct');
    },
    store : function (req, res, next){
        db.product.create({
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
    details : function (req, res , next){
        db.product.findByPK (req.params.id)
            .then (function(product){
                if (product){
                    return res.render ('productDetails' , {product});
                }else{
                    return res.send ('No hay ningun producto que coincida con el Id ingresado');
                }
            });
        /* for (let i = 0; i < products.length; i++) {
            if (req.params.id == products[i].id){
                return res.render ('productDetails' , {product : products[i]});
            }
        }
        return res.send ('No hay ningun producto que coincida con el Id ingresado');*/

    },
    edit : function (req, res, next){
        db.product.findByPK (req.params.id)
            .then (function(product){
                if (product){
                    return res.render ('editProduct' , {product});
                }else{
                    return res.send ('No hay ningun producto que coincida con el Id ingresado');
                }
            });
       /* for (let i = 0; i < products.length; i++) {
            if (req.params.id == products[i].id){
                return res.render ('editProduct' , {product : products[i]});
            }
        }
        return res.send ('No hay ningun producto que coincida con el Id ingresado'); */

    },
    storeEdition : function (req, res, next){
        db.product.update ({
            Id: req.params.id,
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
                id: req.params.id
            }
        });
        res.redirect ("/products/list")

        /* let productToStore = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            description: req.body.price,
            category: req.body.category,
            size: req.body.size,
            color: req.body.color,
            brand: req.body.brand,
            imagen: req.files[0].filename
        }
      let productEdit = products.map (function (product){
    
        if(product.id == req.params.id){
          return productToStore;
        }
        return product;
      });
      fs.writeFileSync (__dirname + "/../data/products.json", JSON.stringify(productEdit, null, 2));
      res.redirect ("/products/list") ; */
      },

      delete: function(req, res, next) {
        db.product.destroy ({
            where : {
                id: req.params.id
            }
        });
        res.redirect ("/products/list");

        /* let productDeleted = products.filter (product =>{
          return product.id != req.params.id
        });
        fs.writeFileSync (__dirname + "/../data/products.json", JSON.stringify(productDeleted, null, 2));
        res.redirect ("/products/list") ;
      },*/
}
}

module.exports = controller;

/* STORE USANDO ARCHIVO JSON
 console.log (req);
let productToStore = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    description: req.body.price,
    category: req.body.category,
    size: req.body.size,
    color: req.body.color,
    brand: req.body.brand,
    imagen: req.files[0].filename
}
products.push (productToStore);
fs.writeFileSync (__dirname + "/../data/products.json", JSON.stringify(products, null, 2));
return res.redirect ('/products/list'); */