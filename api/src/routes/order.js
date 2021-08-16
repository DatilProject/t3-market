var express = require('express');
var router = express.Router();
const {Order, Item, Product, Category, Iva, Ice, Image} = require("../db/db");
const {preProcessItem} = require("../middlewares/products")
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

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

router.get('/old/commerce/:commerceId/:clientId', async (req, res, next) => {
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


router.post('/commerce/:commerceId/:clientId', async (req, res, next) => {
    const activeOrder =  await Order.findOne({where: {is_paid_up: false, clientId:req.params.clientId, marketId: req.params.commerceId }});
    if (activeOrder){
        return res.status(200).json(activeOrder)
    }
    let newOrder = Order.build({ clientId: req.params.clientId , is_paid_up: false,marketId:req.params.commerceId , createdAt: new Date(), updatedAt: new Date() });
    await newOrder.save();
    res.status(200).json(newOrder)
});

router.put("/item/:itemId'", async (req, res) => {    
    const item = await Item.create({ id: req.params.itemId });
    item.quantity = req.body.quantity
    await item.save();
    res.status(200).json(item)
});

router.post('/item/:orderId', async (req, res, next) => {
    let newItem = Item.build({ productId: req.body.productId , 
        quantity: req.body.quantity,
        orderId:req.params.orderId, 
        createdAtorderId: new Date(),
        updatedAt: new Date() });
    await newItem.save();
    res.status(200).json(newItem)
});


router.delete('/item/:itemId', async (req, res, next) => {
    let newItem = await Item.findOne({where: { id: req.params.itemId}});
    await newItem.destroy();
    res.status(200).json({"deleted":true})
});

const calculateOrderAmount = () => {
    return 50;
  };

router.post("/create-payment-intent", async (req, res) => {
    //const { items } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd"
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });






  

module.exports = router;