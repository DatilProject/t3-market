'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      main_code: {
        type: Sequelize.STRING
      },
      auxiliary_code: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      unit: {
        type: Sequelize.STRING
      },
      on_sale: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.FLOAT
      },
      weight: {
        type: Sequelize.FLOAT
      },
      stock: {
        type: Sequelize.INTEGER
      },
      iceId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ice',
          key: 'id'
        }
      },
      ivaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'iva',
          key: 'id'
        }
      },
      marketId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'markets',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};