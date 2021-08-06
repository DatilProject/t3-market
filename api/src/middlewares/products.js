
const moment= require('moment');

getDiscountPrice = (product) =>{
    return product["price"] - product["price"]* product["discount"]/100 
}


preProcessProducts = (productList) =>{
    let today = moment();
    return productList
        .map(p => ({...p, originPrice: p.price, 
                          discountPrice: getDiscountPrice(p),
                          isNew: p.updatedAt >= today.subtract(7, 'days')
                        }));

}

module.exports = {preProcessProducts}