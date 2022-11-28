"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("spots", {
      id: {
        type: Sequelize.UUID,
        required: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(50),
        required: true,
        unique: true,
      },
      description: {
        type: Sequelize.STRING(100),
        required: true,
      },
      location: {
        type: Sequelize.STRING(100),
        required: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      timestamp: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("spots");
  },
};
