module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tableros', [
    {
      id: 0,
      match_id: 0,
      casilla_id: 0,
      createdAt: new Date(),
      updatedAt: new Date(), 
    },
    {
      id: 1,
      match_id: 0,
      casilla_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Tableros', null, {}),
};

