const db = require('../database/models')


var controller = {
    login: function(req, res, next) {
        res.render('login');
    },
    loginpost: function(req, res, next) {
    res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    registerpost: function(req, res, next) {
        res.render('register');
    },
    userlist: function(req, res) {
        db.User.findAll().then(function(result){
            res.send(result)
        }).catch(function(error){
            console.log(error)
            res.send('error')
        })
        
    },
    userhome: function(req, res) {
        res.render('home');
    },
    createUser: function(req,res,next){
        res.render('createUser')
    },
}

module.exports = controller 