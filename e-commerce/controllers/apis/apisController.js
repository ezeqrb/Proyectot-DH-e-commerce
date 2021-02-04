const db = require("../../database/models");



// meter las 4 consultas en una sola y exportar un dato complejo 

//Cantidad de usuarios registrados 

// Cantidad de ventas realizadas 

let controller = {
    countProducts: async function (req, res , next) {
        
        const quantity ={
        qtyProducts : await db.Product.count(),
        qtyKid : await db.Product.count({where:{Categories:Niño}}),
        qtyWmn : await db.Product.count({where:{Categories:Mujer}}),
        qtyMan : await db.Product.count({where:{Categories:Hombre}})
        }
        return res.status(201).json (quantity);
    },
    
}

module.exports = controller;

