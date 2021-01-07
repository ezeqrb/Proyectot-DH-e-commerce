module.exports = function (sequelize , dataTypes) {
    let alias ="product";
    let cols = {
        Id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: dataTypes.STRING
        },
        Price : {
            type: dataTypes.INTEGER
        },
        Description: {
            type: dataTypes.STRING
        },
        Category: {
            type: dataTypes.STRING
        },
        Size : {
            type: dataTypes.STRING
        },
        Colour: {
            type: dataTypes.STRING
        },
        Brand: {
            type: dataTypes.STRING
        },
        Picture: {
            type: dataTypes.STRING,
            allowNull: true

        }


    }
    let config = {
        tableName: "Products",
        timestamps: false
    };

    let productsDb = sequelize.define (alias , cols , config);
    return productsDb;
}

