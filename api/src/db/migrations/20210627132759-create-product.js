'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      main_code: {
        type: Sequelize.STRING,
        allowNull:false
      },
      auxiliary_code: {
        type: Sequelize.STRING,
        allowNull:true
      },
      // category_id: {
      //   type: Sequelize.INTEGER
      // },
      // references: {
      //   model:'category',
      //   key:'id'
      // },
      description: {
        type: Sequelize.STRING,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      on_sale: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull:false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      ice_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      iva_id: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};
