module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Casilla_Deportes', [
    {
      id: 6,
      deporte: 'atletismo',
      fuerza: false,
      velocidad: true,
      resistencia: true,
      coordinacion: true,
      inteligencia: false,
      equilibrio: false,
      total: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      deporte: 'natacion',
      fuerza: true,
      velocidad: false,
      resistencia: true,
      coordinacion: true,
      inteligencia: false,
      equilibrio: false,
      total: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 18,
      deporte: 'futbol',
      fuerza: false,
      velocidad: true,
      resistencia: true,
      coordinacion: false,
      inteligencia: true,
      equilibrio: false,
      total: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 24,
      deporte: 'gimnasia',
      fuerza: true,
      velocidad: false,
      resistencia: false,
      coordinacion: true,
      inteligencia: false,
      equilibrio: true,
      total: 13,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 30,
      deporte: 'tiro con arco',
      fuerza: true,
      velocidad: false,
      resistencia: false,
      coordinacion: false,
      inteligencia: true,
      equilibrio: true,
      total: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 36,
      deporte: 'tenis de mesa',
      fuerza: false,
      velocidad: true,
      resistencia: false,
      coordinacion: false,
      inteligencia: true,
      equilibrio: true,
      total: 20,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Casilla_Deportes', null, {}),
};
