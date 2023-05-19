'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Casilla_Deportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      deporte: {
        type: Sequelize.STRING
      },
      fuerza: {
        type: Sequelize.BOOLEAN
      },
      velocidad: {
        type: Sequelize.BOOLEAN
      },
      resistencia: {
        type: Sequelize.BOOLEAN
      },
      coordinacion: {
        type: Sequelize.BOOLEAN
      },
      inteligencia: {
        type: Sequelize.BOOLEAN
      },
      equilibrio: {
        type: Sequelize.BOOLEAN
      },
      total: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Casilla_Deportes');
  }
};