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
      item_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'item',
          key:'id'
        },
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'order',
          key:'id'
        },
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull:true
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('item');
  }
};
