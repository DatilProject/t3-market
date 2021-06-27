'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('item', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // item_id: {
      //   type: Sequelize.INTEGER
      // },
      // order_id: {
      //   type: Sequelize.INTEGER
      // },
      // references: {
      //   model:'item',
      //   key:'id'
      // },
      // references: {
      //   model:'order',
      //   key:'id'
      // },
      discount: {
        type: Sequelize.FLOAT,
        allowNull:true
      },
      quantity: {
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
    await queryInterface.dropTable('item');
  }
};
