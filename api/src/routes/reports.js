var express = require('express');
var router = express.Router();
const {conn} = require("../db/db");

router.get('/sales/commerce/:id/:range', async (req, res, next) => {
    switch (req.params.range) {
        case "1":
            query= `select date(b."date"), SUM(b.subtotal) as sales 
            from bills b
            inner join orders o on b."orderId" = o.id
            where o."marketId" = ${req.params.id}
            group by date(b."date")
            ORDER BY date DESC;`

            break
        case "2":
            query = `select EXTRACT(YEAR FROM b.date) as year, 
            EXTRACT(MONTH FROM b.date) as "month", SUM(b.subtotal) as sales 
            from bills b
            inner join orders o on b."orderId" = o.id
            where o."marketId" = ${req.params.id}
            group by year, month
            order by year desc,month desc;`
            break
        case "3":
            query = `select EXTRACT(YEAR FROM b.date) as year, 
            SUM(b.subtotal) as sales 
            from bills b
            inner join orders o on b."orderId" = o.id
            where o."marketId" = ${req.params.id}
            group by year
            order by year desc;`
            break
        default:
            res.status(404).send({message: 
            'Range parameter not valid: 1 to group by day, 2 by month, 3 by year' });
            break
      }
    const [results, metadata] = await conn.query(query);
    res.status(200).json(results)
});

router.get('/salesbycategory/commerce/:id', async (req, res, next) => {
    let query = `select c.name, Sum(p.price - p.price * p.discount /100) as sales
    from orders o
    inner join items i on i."orderId" = o.id
    inner join products p on p.id = i."productId"
    inner join categories c on p."categoryId"  = c.id
    where o.is_paid_up = true and o."marketId" = ${req.params.id}
    group by c."name" `
    
    const [results, metadata] = await conn.query(query);
    res.status(200).json(results)
});


router.get('/profit/commerce/:id/:range', async (req, res, next) => {
    switch (req.params.range) {
        case "1":
            query= `select date(b."date"), SUM(b.subtotal)*0.30 as profit 
            from bills b
            inner join orders o on b."orderId" = o.id
            where o."marketId" = ${req.params.id}
            group by date(b."date")
            ORDER BY date DESC;`
            break
        case "2":
            query = `select EXTRACT(YEAR FROM b.date) as year, 
            EXTRACT(MONTH FROM b.date) as "month", SUM(b.subtotal) * 0.3 as profit 
            from bills b
            inner join orders o on b."orderId" = o.id
            where o."marketId" = ${req.params.id}
            group by year, month
            order by year desc,month desc;`
            break
        case "3":
            query = `select EXTRACT(YEAR FROM b.date) as year, 
            SUM(b.subtotal)*0.3 as profit
            from bills b
            inner join orders o on b."orderId" = o.id 
            where o."marketId" = ${req.params.id}
            group by year
            order by year desc;`
            break
        default:
            res.status(404).send({message: 
            'Range parameter not valid: 1 to group by day, 2 by month, 3 by year' });
            break
      }
    const [results, metadata] = await conn.query(query);
    res.status(200).json(results)
});




module.exports = router;