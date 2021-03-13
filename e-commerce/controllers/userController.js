const db = require('../database/models')
const {check , validationResult , body} =require ("express-validator");
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


var controller = {
    
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
        if(req.params.id == req.session.user.id){
        db.User.findByPk(req.params.id)
            .then(function(users){ 

            res.render('userDetail',{users:users})
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
        }else{
            res.send("No tiene acceso a este usuario")
        }

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
            passcrypt: bcrypt.hashSync(req.body.passcrypt, salt),
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