module.exports = (req, res, next) => {
    if (!req.session.user || req.session.user.category != 2) {
        return res.redirect('/');
    }
    next();
}