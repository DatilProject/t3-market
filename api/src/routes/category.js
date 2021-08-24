var express = require('express');
var router = express.Router();
const {Category, Product} = require("../db/db");
const sequelize = require("sequelize");

router.get('/', async (req, res, next) => {
    const categories =  await Category.findAll();
    res.status(200).json(categories)
});

router.get('/commerce/:id', async (req, res, next) => {
    let categories = await Category.findAll({
        attributes: ['id','name', [sequelize.fn('COUNT', sequelize.col('product.id')), 'product_count']],
        include: [
        {
            model: Product,
            attributes: []
        }
        ],
        group: ['category.id']
    });
    res.status(200).json(categories)
});

router.post('/', async (req, res, next) => {
    try{
        const newCategory = await Category.create(req.body);
        res.status(200).send(newCategory);
    }
    catch{
        res.status(404).send({updated: false, message:'Categoría no pudo ser agregada'})
    }

});

module.exports = router;