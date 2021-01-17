const db = require("../database/models");

var controller = {
    index: function(req, res, next) {
        res.render('home');
    },
    hombre: function(req,res,next){
        db.Products.findAll(Category)
    }
    
}

module.exports = controller