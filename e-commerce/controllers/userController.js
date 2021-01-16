const db = require('../database/models')
const {check , validationResult , body} =require ("express-validator");


var controller = {
    
    //Login
    login: function(req, res, next) {
        res.render('login');
    },
    loginpost: function(req, res, next) {
    res.render('login');
    },

    // Registro
    register: function(req, res, next) {
        res.render('register');
    },
    registerpost: function(req, res, next) {
        let errors = validationResult (req);
        if (errors != "undefined") {
            db.User.create({
                username: req.body.username,
                email:req.body.email,
                passcrypt: req.body.passcrypt,
            });
            res.redirect('/');
        }else{
            res.redirect ("/users/login" , {errors : errors.errors})
        }
    },  
    //Listado
    list: function(req, res) {
        db.User.findAll()
            .then(function(users){
                res.render('userList',{users:users})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
    },
    //Detalle

    detail: function(req, res) {
        db.User.findByPk(req.params.id)
            .then(function(users){
            res.render('userDetail',{users:users})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
    },

    //Actualizar Usuario
    edit: function(req, res) {
        db.User.findByPk(req.params.id)
            .then(function(user){
                res.render('updateUsers',{user:user})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
    },
    update: function(req, res) {
        db.User.update({
            username: req.body.username,
            email:req.body.email,
            passcrypt: req.body.passcrypt,
        },{
        where: {
            idusers:req.params.id   
        }
        });
        
        res.redirect('/');
    },  
    delete: function(req, res) {
        db.User.destroy({
            where:{
                idusers: req.params.id
            }
        })
        res.redirect('/users/list');
    },  


}


module.exports = controller