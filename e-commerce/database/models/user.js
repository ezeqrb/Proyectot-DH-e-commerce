module.exports = function(sequelize, DataTypes){


    let user= sequelize.define('User',{
        "idusers":{
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true,
        },
        "username":{
            "type": DataTypes.STRING(45),
            "allowNull": false,
        },
        "email":{
            "type": DataTypes.STRING(45),
            "allowNull": false,
        },
        "passcrypt":{
            "type": DataTypes.STRING(45),
            "allowNull": false,
        },
        "updateAT":{
            "type": DataTypes.DATE(6),
            "allowNull": false,
        },
        "createAt":{
            "type": DataTypes.DATE(6),
            "allowNull": false,
        },
    })
    return user;
}

