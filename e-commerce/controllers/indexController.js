const db = require("../database/models");
const {check , validationResult , body} =require ("express-validator");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const session = require('express-session');
const crypto = require('crypto-js')
var controller = {
    
    // Login
    
    login: function(req, res, next) {
        res.render('login');
    },
    authenticate: async (req,res) => {
        try {
            let errors = validationResult(req);
            console.log (errors)
            if (errors.isEmpty()) {

                let userAuthenticated = await db.User.findOne({where: { email: req.body.email }});
                console.log(userAuthenticated,"hola")
                if (userAuthenticated && bcrypt.compareSync(req.body.passcrypt, userAuthenticated.passcrypt)){
                    req.session.user = { id: userAuthenticated.id, name: userAuthenticated.firstname, isAdmin: userAuthenticated.isAdmin};

                    /*
                    if (req.body.remember){
                        const tokenCrypto = crypto.randomBytes(64).toString('base64');
                        await token.create({ user_id: userAuthenticated.id, token: tokenCrypto });
                        res.cookie('userToken', tokenCrypto, { maxAge: 1000 * 60 * 60 * 24 * 30 });
                    }
                    res.redirect('/');
                    */
                    res.redirect('/')
                } else {
                    res.render('users/login', { errors: { form: { msg: 'Credenciales no válidas' }}});
                }
            } else {
                res.render('users/login', { errors: errors.mapped() });
            }
        } catch (error) {
            console.log(error);
            res.status(500).render('error-500', {error});
        }
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