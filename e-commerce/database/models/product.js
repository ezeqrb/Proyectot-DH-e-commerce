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
        "Picture": {
             "type": DataTypes.STRING,
            "allowNull": true

         }

    } ,  {"tableName": "Products",
    "timestamps": false }
    )

    return productsDb;
}
    