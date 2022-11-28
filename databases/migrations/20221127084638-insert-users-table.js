"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        id: "23839b71-4332-44d1-a4bf-ad86e77f1fde",
        name: "Admin",
        email: "admin@live.com",
        password:
          "$2b$10$bM67C3vS77HxQkrG7wAPzew4MdLUmURkWZrpeS4uBOZKm0iAMwhIK",
        role: "admin",
        timestamp: new Date().getTime(),
      },
    ];

    return queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
