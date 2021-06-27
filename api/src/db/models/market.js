'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class market extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  market.init({
    url: DataTypes.STRING,
    template_id: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'market',
  });
  return market;
};