'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Player_Stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player_id: {
        type: Sequelize.INTEGER
      },
      fuerza: {
        type: Sequelize.INTEGER
      },
      velocidad: {
        type: Sequelize.INTEGER
      },
      resistencia: {
        type: Sequelize.INTEGER
      },
      coordinacion: {
        type: Sequelize.INTEGER
      },
      inteligencia: {
        type: Sequelize.INTEGER
      },
      equilibrio: {
        type: Sequelize.INTEGER
      },
      puntos_competencia: {
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
    await queryInterface.dropTable('Player_Stats');
  }
};