const db = require("../database/models");
const {check , validationResult , body} =require ("express-validator");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const session = require('express-session');

var controller = {
    
    // Login
    
    login: function(req, res, next) {
        res.render('login');
    },

    loginpost: function(req, res, next){
        let errors= validationResult(req);
        
        if(errors.isEmpty()){
        db.User.findOne({where: {email :req.body.email}} )
            .then(function(person){
                
                if(bcrypt.compareSync( req.body.passcrypt , person.passcrypt)){
                    
                    res.render('home', req.session.log=person);
                }else{
                    res.redirect('login',{msg:"usuario o contraseña invalidos"})}
           
            }).catch(function(error){
                console.log(error)
                res.redirect('login',{msg:"Usuario o contraseña invalidos"})
            })
        }else{
            res.send("Campos Invalidos")
        }

    },

    // Registro

    register: function(req, res, next){
        res.render('register');
    },

    registerpost: function(req, res, next) {
        let errors = validationResult (req);
        if (errors.isEmpty()) {
            var hash = bcrypt.hashSync(req.body.passcrypt, salt); 
            db.User.create({
                admin: "false",
                username: req.body.username,
                email:req.body.email,
                passcrypt: hash
            });
            res.redirect('/');
        }else{
            res.redirect ("/users/login" , {errors : errors.errors})
        }
    },  

    //Home

    index: function(req, res, next) {
        res.render('home');
    },
       
}

module.exports = controller