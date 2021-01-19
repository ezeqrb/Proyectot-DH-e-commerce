const db = require('../database/models');
const {check , validationResult , body} =require ("express-validator");


let middleware = {
    isFull: function (req, res, next){
        check('passcrypt', 'This username must be 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
        check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
        next ();
    },
   
   /*
    isAdmin:function(req,res,next){
        db.User.findAll(req.session.usuario){
            then.(function(user){
                if(user.admin!=true){
                    res.redirect('home');
                }
            }) 
        }
        
    },  */
   
   
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

// cookies y session 
