const db = require('../database/models');
const {check , validationResult , body} =require ("express-validator");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


let middleware = {
    isFull: function (req, res, next){
        check ("email").isLength().withMessage ("El campo Email debe ser completado");
        check ("passcrypt").isLength().withMessage ("Campo vacio");
        next ();
    },
    
    hashing:function (req,res,next) {
        var hash = bcrypt.hashSync(req.body.passcrypt, salt); 
        db.User.create({
            passcrypt: hash
        });
            
        next()
   },
   compareHashing:function(Req,res,next) {
        db.User.findAll(req.body.email)
            .then(function(pw) {
                bcrypt.compareSync(pw.bcrypt, req.body.passcrypt)
            })
        next()
   }
   
    // isEmail: function ()

  //  exists: function (req, res, next){

  //  },
}

module.exports = (middleware);

/* Validaciones para Log In:
    Que el campo sea email
    Que los campos esten llenos
    Que el usuario exista
    Que la contraseña coincida con ese usuario  */