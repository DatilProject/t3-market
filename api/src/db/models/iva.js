'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class iva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  iva.init({
    name: DataTypes.STRING,
    percentage: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'iva',
  });
  return iva;
};