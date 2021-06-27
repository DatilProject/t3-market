'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'iva',
      [
        {
          id: 1,
          name:'12%',
          percentage: 0.12,
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name:'0%',
          percentage: 0.00,
          created_at:new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
