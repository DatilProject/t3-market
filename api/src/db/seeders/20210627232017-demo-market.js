'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'market',
      [
        {
          business_name:'electronix',
          email: 'electronix@hotmail.com',
          id_type: 'RUC',
          phone: '0987656789',
          trade_name: 'electronix',
          market_id: 1,
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
