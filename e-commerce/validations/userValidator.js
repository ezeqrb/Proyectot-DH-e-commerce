const {check} = require('express-validator'); 
const db = require('../database/models')

module.exports = {
    loginForm: [
        check('email').notEmpty().withMessage('Ingrese su correo electronico').bail()
        .isEmail().withMessage('Correo electronico inválido').bail(),
        check('passcrypt').notEmpty().withMessage('Ingrese su contraseña')
    ],
    registerForm: [
        check('username').notEmpty().withMessage('Ingrese nombre de usuario').bail(),
        check('email').notEmpty().withMessage('Ingrese una direccion de correo electronico').bail()
        .isEmail().withMessage('El email ingresado no es valido').bail()
        .custom(async value => {
            let match = await db.User.findOne({where: {email : value}});
            if(match){
                return Promise.reject('Este email ya está en uso')
            }
        }),
        check('passcrypt').notEmpty().withMessage('Ingrese una contraseña').bail()
        .custom(value => value.length < 8  ).withMessage('La Pw debe tener al menos 8 caracteres')
        
    ],
    createUserForm: [
        check('username')
    ],
    updateUserForm:[

    ],
    recoverForm: [
        check('email').notEmpty().withMessage('Ingrese una direccion de correo electronico').bail().
        isEmail().withMessage('La direccion de correo electronico no es valida').bail()
        .custom(async value => {
            let match = await db.User.findeOne({where:{email:value}})
            if(!match){
                return Promise.rejecte('La direccion de correo electronico no coicide con ningún usuario existente')
            }
        })
        
    ]

}