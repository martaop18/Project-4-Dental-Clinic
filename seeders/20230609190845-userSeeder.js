'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Users', [
      
      { id: 1,
        name: "Eva",
        lastname: "Ortega",
        email: "eva@email.com",
        password: "password1",
        phone: "678992123",
        role_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { id: 2,
        name: "Caroline",
        lastname: "Norris",
        email: "caroline@email.com",
        password: "password2",
        phone: "578992124",
        role_id:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      { id: 3,
        name: "Magy",
        lastname: "Lozano",
        email: "magy@email.com",
        password: "password3",
        phone: "478992128",
        role_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      { id: 4,
        name: "Sylvia",
        lastname: "Moreira",
        email: "sylvia@email.com",
        password: "password4",
        phone: "878992128",
        role_id:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      { id: 5,
        name: "Nina",
        lastname: "Osorio",
        email: "nina@email.com",
        password: "password5",
        phone: "478992176",
        role_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      { id: 6,
        name: "Sofia",
        lastname: "Bari",
        email: "sofia@email.com",
        password: "password6",
        phone: "408992196",
        role_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
