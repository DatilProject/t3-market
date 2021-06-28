var express = require('express');
var router = express.Router();
const { Product,Image,Category, Iva, Ice} = require("../db/db");

router.get('/', async (req, res, next) => {

    const products =  await Product.findAll({
        include:[{
            model: Category,
            attributes: ['name']
        }, 
        {
            model: Iva,
            attributes: ['name', 'percentage']
        }, 
        {
            model: Ice,
            attributes: ['name', 'percentage']
        }, 
        {
            model: Image,
            attributes: ['location']
        }, 
        ]
        });
    res.status(200).json(products)
});

router.get('/commerce/:id', async (req, res, next) => {

    const products =  await Product.findAll({
        where: {
            marketId: req.params.id
        },
        include:[{
            model: Category,
            attributes: ['name']
        }, 
        {
            model: Iva,
            attributes: ['name', 'percentage']
        }, 
        {
            model: Ice,
            attributes: ['name', 'percentage']
        }, 
        {
            model: Image,
            attributes: ['location']
        }, 
        ]
        });
    res.status(200).json(products)
});

module.exports = router;