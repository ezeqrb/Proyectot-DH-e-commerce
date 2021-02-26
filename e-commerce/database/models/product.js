module.exports = function (sequelize , DataTypes) {

    let productsDb = sequelize.define('Product' ,
     {  "Id": {
             "type": DataTypes.INTEGER,
             "primaryKey": true,
            "autoIncrement": true
                 },
        "Name": {
             "type": DataTypes.STRING
             },
        "Price" : {
            "type": DataTypes.INTEGER
            },
        "Description": {
            "type": DataTypes.STRING
            },
        "Category": {
            "type": DataTypes.STRING
            },
        "Size" : {
             "type": DataTypes.INTEGER
            },
        "Colour": {
            "type": DataTypes.STRING
             },
        "Brand": {
             "type": DataTypes.STRING
         },
         "Sport": {
            "type": DataTypes.STRING
        },
        "Picture": {
             "type": DataTypes.STRING,
            "allowNull": true

         }

    } ,  {"tableName": "Products",
    "timestamps": false }
    )

    productsDb.associate = function (models){
        productsDb.belongsToMany (models.Cart , {
             as: "products_cart",
             foreignKey : "Product_id",
             otherKey : "Cart_id",
             through : "Cart_Product"
        }) 
    }

    return productsDb;
}
    