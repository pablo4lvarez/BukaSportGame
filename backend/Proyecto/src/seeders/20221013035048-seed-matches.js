module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Matches', [
    {
      id: 0,
      turnos: 0,
      player_1: 100,
      player_2: 101,
      player_3: 102,
      current_player: 100,
      position_1: 0,
      position_2: 0,
      position_3: 0,
      tablero_id: 0,
      pos1_anterior: 0,
      pos2_anterior: 0,
      pos3_anterior: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // {
    //   id: 1,
    //   turnos: 1,
    //   player_1: 100,
    //   player_2: 101,
    //   player_3: 102,
    //   current_player: 101,
    //   position_1: 5,
    //   position_2: 6,
    //   position_3: 7,
    //   tablero_id: 1,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Matches', null, {}),
};
