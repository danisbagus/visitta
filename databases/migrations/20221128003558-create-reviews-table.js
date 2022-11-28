"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("reviews", {
      id: {
        type: Sequelize.UUID,
        required: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        required: true,
      },
      spot_id: {
        type: Sequelize.UUID,
        required: true,
      },
      body: {
        type: Sequelize.STRING(100),
        required: false,
      },
      rating: {
        type: Sequelize.TINYINT,
        required: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("reviews");
  },
};
