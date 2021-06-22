var express = require('express');
var router = express.Router();

let products = [{
        idProduct: "899931bc-4e2d-46bb-a3a3-9b2127d98a13", 
        mainCode: "001", 
        auxiliaryCode: "", 
        category: "Muebles", 
        description: "Muebles para sala", 
        images: ["http://www.cetem.es/rs/3625/c166665a-817b-467a-b298-d92c11417c34/b6a/filename/muebleweb.jpg", 
                "https://imagenes.elcomercio.com/files/article_main/uploads/2020/07/29/5f2204d3f2c62.jpeg"],
        name: "Muebles", 
        onSale: true,
        price: 110,
        stock: 5,
        iva: 12,
        ice: 0
    },{
        idProduct: "769931bc-4e2d-41bb-e3a5-9b2127d98a53", 
        mainCode: "002", 
        auxiliaryCode: "", 
        category: "Tecnología", 
        description: "Laptop ideal para profesionales y estudiantes", 
        images: ["https://www.tventas.com/7095056/laptop-14-hp-dk1022wm.jpg", 
                "https://livansud.vteximg.com.br/arquivos/ids/160690-800-800/laptop-lenovo-81we00nkus-15-intel-core-i5-12gb-eckohogar-1.jpg?v=637535019284600000",
                "https://www.sukasa.com/198932-medium_default/hyundai-laptop-thinnote-a-celeron-n3350-4gb-64gb-expandible-hdd-windows-10-home-14.jpg"],
        name: "Laptop 14 pulgadas", 
        onSale: true,
        price: 1210,
        stock: 3,
        iva: 12,
        ice: 0
    }]

router.get('/', async (req, res, next) => {
    res.status(200).json(products)
});

module.exports = router;