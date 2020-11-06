var controller = {
    cart: function(req, res, next) {
        res.render('cart');
      },
    product: function(req, res, next) {
        res.render('product');
      },
    shop: function(req, res, next) {
      res.render('shop');
    }, 
}

module.exports = controller 