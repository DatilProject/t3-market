var express = require('express');
var router = express.Router();

let products = [{
        id: "", 
        category: "Food", 
        description: "", 
        discount: 0, 
        name: "Coca Cola 3L", 
        onSale: true,
        price: 3, 
        stock: 100
    },{    
        id: "", 
        category: "Service", 
        description: "description", 
        discount: 1, 
        name: "Name", 
        onSale: true,
        price: 10, 
        stock: 10
}]

router.get('/', async (req, res, next) => {
    res.status(200).json(products)
});

module.exports = router;