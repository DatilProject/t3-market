var express = require('express');
var router = express.Router();
const {Category} = require("../db/db");

router.get('/', async (req, res, next) => {
    const categories =  await Category.findAll();
    res.status(200).json(categories)
});

module.exports = router;