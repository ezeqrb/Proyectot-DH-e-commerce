module.exports = function (sequelize , DataTypes) {

    let cartDb = sequelize.define('Cart' ,
     {  "id": {
             "type": DataTypes.INTEGER,
             "primaryKey": true,
            "autoIncrement": true
                 },
        "state": {
             "type": DataTypes.STRING
             }
        

    } ,  {"tableName": "Cart",
    "timestamps": false }
    )

    cartDb.associate = function (models){
         cartDb.belongsTo (models.User , {
              as: "user",
              foreignKey : "user_id"
         }) ,

          cartDb.belongsToMany (models.Product , {
               foreignKey : "Cart_id",
               otherKey : "Product_id" ,
               through : models.cart_product
          })
    }

    return cartDb;
}
    