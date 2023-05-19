'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deportes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      fuerza: {
        type: Sequelize.INTEGER
      },
      inteligencia: {
        type: Sequelize.INTEGER
      },
      velocidad: {
        type: Sequelize.INTEGER
      },
      coordinacion: {
        type: Sequelize.INTEGER
      },
      resistencia: {
        type: Sequelize.INTEGER
      },
      equilibrio: {
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
    await queryInterface.dropTable('Deportes');
  }
};