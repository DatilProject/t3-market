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
      // template_id: {
      //   type: Sequelize.INTEGER
      // },
      // theme_id: {
      //   type: Sequelize.INTEGER
      // },
      // references: {
      //   model:'template',
      //   key:'id'
      // },
      // references: {
      //   model:'theme',
      //   key:'id'
      // },
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
    await queryInterface.dropTable('market');
  }
};
