module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Players', [
    {
      id: 100,
      nombre: 'pedro',
      apellido: 'gonzalez',
      nickname: 'PLAYER1',
      email: 'ian@gmail.com',
      hash_contrasena: '$2a$05$T.juQHa.qJvBHXD3JDNBB.OiBcF6PaaIf.H2w8Ljac6UKtg4EhbSi', //12345
      delegacion: 'Brasil',
      puntos: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 101,
      nombre: 'fernando',
      apellido: 'gonzalez',
      nickname: 'PLAYER2',
      email: 'fgonz@gmail.com',
      hash_contrasena: '$2a$05$GGKYMrkTVgsJAvcwd4vAo.Et7PzLEE69si2vfERjIylTD47Rk0B0G', //tenis
      delegacion: 'EEUU',
      puntos: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 102,
      nombre: 'nick',
      apellido: 'valenzuela',
      nickname: 'PLAYER3',
      email: 'nvchorri@gmail.com',
      hash_contrasena: '$2a$05$T4yNX0F/CzL4GAJXMWa2HuUJckIBtCMDgkZJ5pb/Ik9IN3DxfQxKG', //abuelita123
      delegacion: 'Corea',
      puntos: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Players', null, {}),
};
