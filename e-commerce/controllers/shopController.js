var controller = {
    cart: function(req, res, next) {
        res.render('cart');
      },
    product: function(req, res, next) {
        res.render('product');
      },

}

module.exports = controller 