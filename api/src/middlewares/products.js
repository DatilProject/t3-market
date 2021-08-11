
const moment= require('moment');

getDiscountedPrice = (product) =>{
    return roundToTwo(product["price"] - product["price"]*product["discount"]/100 )
}

roundToTwo = (num) => {    
    return +(Math.round(num + "e+2")  + "e-2");
}

getDiscount = (product) =>{
    return roundToTwo(product["discount"]*product["price"]/100)
}

preProcessProducts = (productList) =>{
    let today = moment();
    return productList
        .map(p => ({...p, originPrice: p.price, 
                          discountPrice: getDiscount(p),
                          price: getDiscountedPrice(p), 
                          isNew: p.updatedAt >= today.subtract(7, 'days')
                        }));
}

preProcessItem = (itemList) =>{
    let today = moment();
    return itemList
        .map(i => ({...i, originPrice: i.product.price, 
                          discountPricePerUnit: getDiscount(i.product),
                          pricePerUnit: getDiscountedPrice(i.product)
                        }))
        .map(i => ({...i, totalPrice: roundToTwo(i.pricePerUnit * i.quantity)}));
}

module.exports = {preProcessProducts, preProcessItem}