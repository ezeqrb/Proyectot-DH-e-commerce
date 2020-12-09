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
        products.push (req.body);
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
      let productEdit = products.map (function (product){
    
        if(product.id == req.params.id){
          return req.body;
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