var controller = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },
    login: function(req, res, next) {
        res.render('login');
    },
    home: function(req, res, next) {
        res.render('home');
      },
    register:  function(req, res, next) {
        res.render('register');
      }

}

module.exports = controller