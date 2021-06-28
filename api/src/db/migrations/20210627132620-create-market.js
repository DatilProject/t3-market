'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('market', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING,
        allowNull:true
      },
      template_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model:'template',
          key:'id'
        },
      },
      theme_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model:'theme',
          key:'id'
        },
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
    await queryInterface.dropTable('market');
  }
};
