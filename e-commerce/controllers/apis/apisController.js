const db = require("../../database/models");

let controller = {
    countProducts: async function (req, res , next) {
        const amount = await db.Product.count();
        return res.status(201).json (amount);
        
        
    } 
}

module.exports = controller;