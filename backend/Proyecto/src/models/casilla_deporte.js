'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casilla_Deporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Casilla_Deporte.init({
    deporte: DataTypes.STRING,
    fuerza: DataTypes.BOOLEAN,
    velocidad: DataTypes.BOOLEAN,
    resistencia: DataTypes.BOOLEAN,
    coordinacion: DataTypes.BOOLEAN,
    inteligencia: DataTypes.BOOLEAN,
    equilibrio: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Casilla_Deporte',
  });
  return Casilla_Deporte;
};