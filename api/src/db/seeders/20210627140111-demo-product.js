'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'product',
      [
        {
          id: 1,
          main_code:'12345',
          description: '',
          name: 'XBOX',
          on_sale: false,
          price: 205.50,
          stock: 34,
          ice_id: 1,
          iva_id: 1,
          market_id:1,
          created_at:new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          main_code:'67890',
          description: '',
          name: 'Play5',
          on_sale: true,
          price: 400.00,
          stock: 97,
          ice_id: 1,
          iva_id: 1,
          market_id:1,
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
