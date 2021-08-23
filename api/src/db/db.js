
const Sequelize = require("sequelize");
const config = require('../../config/config');

connData = config["development"]

const ProductModel = require("../db/models/product");
const CategoryModel = require("../db/models/category");
const IvaModel = require("../db/models/iva");
const IceModel = require("../db/models/ice");
const MarketModel = require("../db/models/market");
const ThemeModel = require("../db/models/theme");
const TemplateModel = require("../db/models/template");
const CommerceModel = require("../db/models/commerce");
const ClientModel = require("../db/models/client");
const AccountCredentialsModel = require("../db/models/account");
const ImageModel = require("../db/models/image");
const OrderModel = require("../db/models/order");
const BillModel = require("../db/models/bill");
const ItemModel = require("../db/models/item");


const conn = new Sequelize(connData.database,
                           connData.username, 
                           connData.password,
                           {
                            "host": "localhost",
                            "dialect": "postgres",
                            "logging": false
                            });


const Product = ProductModel(conn,Sequelize);
const Category = CategoryModel(conn,Sequelize);
const Market = MarketModel(conn,Sequelize);
const Iva = IvaModel(conn,Sequelize);
const Ice = IceModel(conn,Sequelize);
const Template = TemplateModel(conn,Sequelize);
const Theme = ThemeModel(conn,Sequelize);
const Commerce = CommerceModel(conn,Sequelize);
const AccountCredentials = AccountCredentialsModel(conn,Sequelize);
const Client = ClientModel(conn,Sequelize);
const Image = ImageModel(conn,Sequelize);
const Order = OrderModel(conn,Sequelize);
const Bill = BillModel(conn,Sequelize);
const Item = ItemModel(conn,Sequelize);

Category.hasOne(Product);
Product.belongsTo(Category);

Iva.hasOne(Product);
Product.belongsTo(Iva);

Ice.hasOne(Product)
Product.belongsTo(Ice);

Market.hasMany(Product);
Product.belongsTo(Market);

Product.hasMany(Image);
Image.belongsTo(Product, { onDelete: 'CASCADE'});

Template.hasOne(Market);
Market.belongsTo(Template);

Theme.hasOne(Market);
Market.belongsTo(Theme);

Commerce.hasOne(Market);
Market.belongsTo(Commerce);

Product.hasOne(Item);
Item.belongsTo(Product);

AccountCredentials.hasOne(Client);
Client.belongsTo(AccountCredentials);

AccountCredentials.hasOne(Commerce);
Commerce.belongsTo(AccountCredentials);

Client.hasMany(Order);
Order.belongsTo(Client);

Market.hasMany(Order);
Order.belongsTo(Market);

Order.hasOne(Bill);
Bill.belongsTo(Order);

Order.hasMany(Item);
Item.belongsTo(Order);

conn.sync({force:false})
.then(()=> {
    console.log("Postgres connnection successful");
})

module.exports = {conn, Product, Image, Category, Iva, Ice, AccountCredentials, Commerce, Client, Order, Item}