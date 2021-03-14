const db = require('../database/models');

module.exports = {

    dashboard: function(req,res,next){
        res.render('dashboard')
    },
    userList: function(req,res,next){
        db.User.findAll()
            .then(function(users){
                    res.render('dashboardUser',{users:users})
            }).catch(function(error){
                console.log(error)
                res.send('error')
            })
       
    },
    productList: function(req,res,next){
        db.Product.findAll()
            .then(function(productsDB){
                res.render ("productsList" , {productsDB});
            }).catch(function(error){
                console.log(error)
                res.send('error')
            })
    },


}