'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bill.init({
    date: DataTypes.DATE,
    order_id: DataTypes.INTEGER,
    payment_date: DataTypes.DATE,
    payment_method: DataTypes.STRING,
    subtotal: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'bill',
  });
  return bill;
};