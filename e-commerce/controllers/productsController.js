let fs = require ('fs');
let products = JSON.parse (fs.readFileSync (__dirname + '/../data/products.json'))

let controller = {

    list : function (req, res, next){
        res.render ("productslist", {products});
    },
    create : function (req, res, next){
        res.render ('createProduct');
    },
    store : function (req, res, next){
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
        return res.redirect ('/products/list');
    },
    details : function (req, res , next){
        for (let i = 0; i < products.length; i++) {
            if (req.params.id == products[i].id){
                return res.render ('productDetails' , {product : products[i]});
            }
        }
        return res.send ('No hay ningun producto que coincida con el Id ingresado');

    },
    edit : function (req, res, next){
        for (let i = 0; i < products.length; i++) {
            if (req.params.id == products[i].id){
                return res.render ('editProduct' , {product : products[i]});
            }
        }
        return res.send ('No hay ningun producto que coincida con el Id ingresado');

    },
    storeEdition : function (req, res, next){
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
      let productEdit = products.map (function (product){
    
        if(product.id == req.params.id){
          return productToStore;
        }
        return product;
      });
      fs.writeFileSync (__dirname + "/../data/products.json", JSON.stringify(productEdit, null, 2));
      res.redirect ("/products/list") ;
      },
      delete: function(req, res, next) {
        let productDeleted = products.filter (product =>{
          return product.id != req.params.id
        });
        fs.writeFileSync (__dirname + "/../data/products.json", JSON.stringify(productDeleted, null, 2));
        res.redirect ("/products/list") ;
      },
}

module.exports = controller;