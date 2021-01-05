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
}

module.exports = controller 