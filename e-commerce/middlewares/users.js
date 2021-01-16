const bcrypt = require('bcrypt');
const db = require('../database/models');
const {check , validationResult , body} =require ("express-validator");

let middleware = {
    isFull: function (req, res, next){
        check ("email").isLength().withMessage ("El campo Email debe ser completado");
        check ("passcrypt").isLength().withMessage ("Campo vacio");
        next ();
    },
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