module.exports = (req, res, next) => {
    if (req.session.user){ 
        res.locals.userLocals = req.session.user 
    }else{
        res.locals.userLocals = null
    }
    next()
}
