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
        references: {
          model: "Users",
          key: "id",
          where: {
            role_id: 3
          }
        },
        allowNull: false,
      },
      
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            role_id: 1
          }
        },
        allowNull: false,
      },
      
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Services",
          key: "id"
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};