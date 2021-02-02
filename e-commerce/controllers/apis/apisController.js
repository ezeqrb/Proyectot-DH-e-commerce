const db = require("../../database/models");

let controller = {
    countProducts: async function (req, res , next) {
        const amount = await db.Product.count();
        return res.status(201).json (amount);
        
    },
    countCategoriesHombre: async function (req, res , next) {
        const amount = await db.Product.count({where:{Categories:Hombre}});
        return res.status(201).json (amount);
    },
    countCategoriesMujer: async function (req, res , next) {
        const amount = await db.Product.count({where:{Categories:Mujer}});
        return res.status(201).json (amount);
    },
    countCategoriesKid: async function (req, res , next) {
        const amount = await db.Product.count({where:{Categories:Niño}});
        return res.status(201).json (amount);
    }
}

module.exports = controller;