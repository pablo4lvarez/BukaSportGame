/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      turnos: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      player_1: {
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' },
      },
      player_2: {
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' },
      },
      player_3: {
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' },
      },
      current_player: {
        type: Sequelize.INTEGER,
        references: { model: 'Players', key: 'id' },
      },
      position_1: {
        type: Sequelize.INTEGER,
      },
      position_2: {
        type: Sequelize.INTEGER,
      },
      position_3: {
        type: Sequelize.INTEGER,
      },
      tablero_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Tableros', key: 'id' },
      },
      pos1_anterior: {
        type: Sequelize.INTEGER,
      },
      pos2_anterior: {
        type: Sequelize.INTEGER,
      },
      pos3_anterior: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matches');
  },
};
