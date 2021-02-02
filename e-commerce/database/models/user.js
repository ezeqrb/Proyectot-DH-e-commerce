module.exports = function(sequelize, DataTypes){


    let user= sequelize.define('User',{
        "idusers":{
        "type": DataTypes.INTEGER,
        "autoIncrement": true,
        "primaryKey": true,
        },
        "admin":{
            "type": DataTypes.STRING(5),
            "allowNull": false,
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
            "type": DataTypes.STRING(255),
            "allowNull": false,
        },
        "updatedAt":{
            "type": DataTypes.DATE(6),
            "allowNull": false,
        },
        "createdAt":{
            "type": DataTypes.DATE(6),
            "allowNull": false,
        }
    }, {
        "tableName":"users",

    })
    return user;

}