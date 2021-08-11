var express = require('express');
var router = express.Router();
const {Order, Item, Product, Category, Iva, Ice, Image} = require("../db/db");
const {preProcessItem} = require("../middlewares/products")

router.get('/commerce/:commerceId/:clientId', async (req, res, next) => {
    const orders =  await Order.findAll({
        where: {is_paid_up: false, clientId:req.params.clientId },
        attributes:["id", "is_paid_up","createdAt", "updatedAt" ], 
        include:[{
            model: Item,
            attributes: ['id', 'quantity'],
            include: [
                {
                    model: Product,
                    attributes: {exclude: ['marketId', 'createdAt', 'updatedAt', 'ivaId', 'iceId']},
                    where: {
                        marketId: req.params.commerceId
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
                    }
                ]
        }]
    }]});

    let jsonString = await JSON.stringify(orders)
    let ordersObj = JSON.parse(jsonString)
    
    res.status(200).json(ordersObj
                        .map(o => ({...o, items: preProcessItem(o.items)})))
    });

    router.get('old/commerce/:commerceId/:clientId', async (req, res, next) => {
        const orders =  await Order.findAll({
            where: {is_paid_up: true, clientId:req.params.clientId },
            attributes:["id", "is_paid_up","createdAt", "updatedAt" ], 
            include:[{
                model: Item,
                attributes: ['id', 'quantity'],
                include: [
                    {
                        model: Product,
                        attributes: {exclude: ['marketId', 'createdAt', 'updatedAt', 'ivaId', 'iceId']},
                        where: {
                            marketId: req.params.commerceId
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
                        }
                    ]
            }]
        }]});
    
        let jsonString = await JSON.stringify(orders)
        let ordersObj = JSON.parse(jsonString)
        
        res.status(200).json(ordersObj
                            .map(o => ({...o, items: preProcessItem(o.items)})))
        });


module.exports = router;