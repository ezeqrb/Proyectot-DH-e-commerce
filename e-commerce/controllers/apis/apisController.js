const db = require("../../database/models");



// meter las 4 consultas en una sola y exportar un dato complejo 

//Cantidad de usuarios registrados 

// Cantidad de ventas realizadas 

let controller = {
    countProducts: async function (req, res) {
        
        const quantity ={
            status : "200",
            state:"Ok",
            qtyProducts : await db.Product.count(),
            qtyKid : await db.Product.count({where:{Category:"Niño"}}),
            qtyWmn : await db.Product.count({where:{Category:"Mujer"}}),
            qtyMan : await db.Product.count({where:{Category:"Hombre"}})
        }
        return res.status(201).json(quantity);
    },
    countUsers: async function (req, res ) {
        
        const users ={
            status : "200",
            state:"Ok",
            qtyUsers : await db.User.count()
        }
        return res.status(201).json (users);
    },
    
}

module.exports = controller;

