module.exports = (sequelize, DataTypes) => {
    const cart_product = sequelize.define('cart_product', {
        Cart_id: DataTypes.INTEGER,
        Product_id: DataTypes.INTEGER
    },
    {
        tableName: 'cart_product',
    }
    )

    return cart_product;
}