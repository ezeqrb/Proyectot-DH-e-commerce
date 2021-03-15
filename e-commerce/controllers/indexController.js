const db = require("../database/models");
const {check , validationResult , body} =require ("express-validator");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
const session = require('express-session');
const crypto = require('crypto-js')
var controller = {
    
    // Login
    
    login: function(req, res, next) {
        let msg;
            return res.render('login' , {msg});
 
    },
    authenticate: async (req,res) => {
        try {
            let errors = validationResult(req);
            console.log (errors)
            if (errors.isEmpty()) {

                let userAuthenticated = await db.User.findOne({where: { email: req.body.email }});
                console.log(userAuthenticated,"hola")
                if (userAuthenticated && bcrypt.compareSync(req.body.passcrypt, userAuthenticated.passcrypt)){
                    req.session.user = {id:userAuthenticated.idusers ,email:userAuthenticated.email, usuario:userAuthenticated.username};
                    
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
                    res.render('login', { errors: { form: { msg: 'Credenciales no válidas' }}});
                }
            } else {
                res.render('login', { errors: errors.mapped() });
            }
        } catch (error) {
            console.log(error);
            res.status(500).render('login', {error});
        }
    },
    check: function (req,res){
        console.log (req.session)
        res.send("el usuario logueado es: " + req.session.user.email)
    

    },

    // Registro

    register: function(req, res, next){
        res.render('register');
        
    },

    registerpost: function(req, res, next) {
        let errors = validationResult (req);
        if (errors.isEmpty()) {
            var hash = bcrypt.hashSync(req.body.passcrypt, salt); 
            
            //USAR METODO FIND OR CREATE !!!

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
        db.Product.findAll()
            .then(function(product){
                res.render('home',{products:product})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
    // IMPLEMENTAR LOGICA DE MANDAR 5 DE HOBRE Y 5 DE MUJER 
},
    logout: function(req , res , next){
        if (req.session) {
            req.session.destroy(function(err) {
                if (err) return console.log(err);
                return res.redirect('/');
            });
        }

    }

}

module.exports = controller