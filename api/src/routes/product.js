var express = require('express');
var router = express.Router();
const { Product,Image,Category, Iva, Ice} = require("../db/db");
const {preProcessProducts} = require("../middlewares/products")
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
        ],
        raw: true    
    });

    res.status(200).json(preProcessProducts(products))
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
        ],
        raw: true
        });

    res.status(200).json(preProcessProducts(products))
});

router.post('/', async (req, res, next) => {
    try{
        const newProduct = await Product.create(req.body);
        res.status(200).send(newProduct);
    }
    catch{
        res.status(404).send({updated: false, message:'Producto no pudo ser agregado'})
    }

});

router.put('/:id', async (req,res,next)=>{
    const product = await Product.update(req.body , {
        where: {
          id: req.params.id
        }
      });
      
    if(!product){
        res.status(404).send({updated: false, message:'Producto no pudo ser actualizado.'})
    }else{
        
        res.status(200).json({updated: true, message: "Se ha actualizado correctamente"});
    }
    });


router.delete('/:id', async (req, res, next) => {
    Product.destroy({
        where: {id:req.params.id}
        })
        .then(() => {
        res.status(204).json({deleted: true, message: "Se eliminó el producto correctamente"}).end();
        })
        .catch(() => {
        res.status(404).json({deleted: false, message: "No se eliminó correctamente el producto"});
    })
        
});

module.exports = router;