const fs = require('fs');
var products = JSON.parse(fs.readFileSync(__dirname + "/../database/products.json"));

const controller = {
    hiprod:function(req, res, next){
        res.render('hiprod');
      },
    createView: function(req, res, next){
      res.render('create');
    },
    create : function(req, res, next){
         datos = {

          id : products.length>0 ? Number(products[products.length-1].id) + 1 : 1,
          ...req.body
        }
      products.push(datos);
      jsonProducts = JSON.stringify(products,null,2)
      fs.writeFileSync(__dirname + "/../database/products.json", jsonProducts);
      res.send('producto creado')
    },
    readView: function(req, res, next){
      res.render('read',{products});
    },
    updateView: function(req, res, next){
      var productId = req.params.id;
      var productFound;
      
      for(var i=0;i < products.length;i++){
        if(products[i].id == productId){
          productFound = products[i];
          break
        }
      }
      if (productFound){
        res.render('update',{productFound});  
      }else{
        res.render('welcome',{ msg: "No se encontró el producto"})
      }
            
    },
    update: function(req, res, next){
      var idProduct = req.params.id
      var editPorducts = products.map(function(prod){
        if(prod.id == idProduct){
          let productEdited = req.body;
          productEdited.id = idProduct;
          return productEdited;
        }
        return prod;
      });
      editProductsJSON = JSON.stringify(editPorducts,null,2)
      fs.writeFileSync(__dirname+"/../database/products.json",editProductsJSON)
      res.render('welcome',{ msg : "Producto actualizado con éxito !"})
    },
    delete: function(req, res, next){
       
      var idProduct = req.params.id;
      var productDelete = products.filter(function(prod){
        return prod.id != idProduct
      });
      deleteProductsJSON = JSON.stringify(productDelete)
      fs.writeFileSync(__dirname+"/../database/products.json",deleteProductsJSON);
      res.render('welcome',{msg:"Producto eliminado con éxito !"})    
    }
}

module.exports = controller