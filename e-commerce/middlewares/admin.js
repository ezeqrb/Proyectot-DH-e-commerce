module.exports = (req, res, next) => {
    if (!req.session.user || req.session.user.admin == "false"){
        return res.redirect('/');
    }
    next();
}