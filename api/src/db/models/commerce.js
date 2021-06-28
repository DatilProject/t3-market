'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commerce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  commerce.init({
    business_name: DataTypes.STRING,
    email: DataTypes.STRING,
    id_type: DataTypes.STRING,
    phone: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    accountId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commerce',
  });
  return commerce;
};