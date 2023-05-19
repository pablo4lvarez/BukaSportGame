'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Casilla, {
        // as: 'casillaid',
        foreignKey: 'casilla_id',
      });
    }
  }
  Deporte.init({
    nombre: DataTypes.STRING,
    fuerza: DataTypes.INTEGER,
    inteligencia: DataTypes.INTEGER,
    velocidad: DataTypes.INTEGER,
    coordinacion: DataTypes.INTEGER,
    resistencia: DataTypes.INTEGER,
    equilibrio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Deporte',
  });
  return Deporte;
};