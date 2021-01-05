var controller = {
    index: function(req, res, next) {
        res.redirect('home');
    },
    home: function(req, res, next) {
        res.render('home');
      },
    
}

module.exports = controller