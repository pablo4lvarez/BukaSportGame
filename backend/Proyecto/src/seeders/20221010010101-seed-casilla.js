module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Casillas', [
    {
      id: 0,
      posicion: 0,
      con_deporte: false,
      con_sorpresa: false,
      con_vs: false,
      con_player_1: true,
      con_player_2: true,
      con_player_3: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      posicion: 1,
      con_deporte: false,
      con_sorpresa: false,
      con_vs: false,
      con_player_1: false,
      con_player_2: false,
      con_player_3: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Casillas', null, {}),
};

