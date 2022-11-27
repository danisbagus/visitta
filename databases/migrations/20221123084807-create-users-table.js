"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        required: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(20),
        required: true,
      },
      email: {
        type: Sequelize.STRING(50),
        required: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(60),
        required: true,
      },
      role: {
        type: Sequelize.STRING(10),
      },
      timestamp: {
        type: Sequelize.INTEGER,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
