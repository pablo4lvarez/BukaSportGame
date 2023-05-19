'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Casillas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posicion: {
        type: Sequelize.INTEGER
      },
      con_vs: {
        type: Sequelize.BOOLEAN
      },
      con_sorpresa: {
        type: Sequelize.BOOLEAN
      },
      con_deporte: {
        type: Sequelize.BOOLEAN
      },
      con_player_1: {
        type: Sequelize.BOOLEAN
      },
      con_player_2: {
        type: Sequelize.BOOLEAN
      },
      con_player_3: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Casillas');
  }
};