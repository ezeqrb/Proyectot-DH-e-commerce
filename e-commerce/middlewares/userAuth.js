const bcrypt = require('bcrypt');
const db = require('../database/models');



function auth(req,res,next) {
    db.Users.findAll(req.body.email,req.body.passcrypt)
        .then(function(users){
            return bcrypt.compareSync(req.body.passcrypt,users.passcrypt)
        })
    
if (){

}



}

module.exports = auth



passcrypt= bcrypt.hashSync(req.body.passcrypt,12)
validation = bcrypt.compareSync(req.body.passcrypt,)