const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const config = require('../../config/config');

connData = config["development"]

const conn = new Sequelize(connData.database,
                           connData.username, 
                           connData.password,
                           {
                            "host": "localhost",
                            "dialect": "postgres",
                            "logging": false
                            });


conn.sync({force:false})
.then(()=> {
    console.log("Postgres connnection successful");
})


const ProductModel = require("../db/models/product");

const Product = ProductModel(conn,Sequelize);

console.log(Product)
module.exports = {config}


Product.findAll();

module.exports = {conn, Product}