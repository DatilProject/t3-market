'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    main_code: DataTypes.STRING,
    auxiliary_code: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    on_sale: DataTypes.BOOLEAN,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    ice_id: DataTypes.INTEGER,
    iva_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};