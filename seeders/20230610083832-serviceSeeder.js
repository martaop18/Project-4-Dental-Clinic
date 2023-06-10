'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Services', [
      
      {id: 1,
        name: "Teeth cleanings",
        description: "Regular teeth cleanings are important to maintaining healthy teeth and gums.",
        price: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {id: 2,
        name: "Tooth extractions",
        description:"It is the removal of a tooth from its socket in the bone",
        price: "80",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {id: 3,
        name: " Root canal therapy",
        description: "It is a dental procedure that is used to repair teeth that are infected or badly decayed",
        price: "150",
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
