"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("images", {
      id: {
        type: Sequelize.UUID,
        required: true,
        primaryKey: true,
      },
      spot_id: {
        type: Sequelize.UUID,
        required: true,
      },
      url: {
        type: Sequelize.STRING(100),
        required: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("images");
  },
};
