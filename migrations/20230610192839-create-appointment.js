'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"User",
          key: "id"
        }
      },
      admin_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"User",
          key: "id"
        }

      },
      service_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Service",
          key: "id"
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};