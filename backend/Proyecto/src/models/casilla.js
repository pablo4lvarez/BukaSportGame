'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casilla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tablero, {
        // as: 'casillaid',
        foreignKey: 'casilla_id'
      });
      this.hasOne(models.Deporte, {
        as: 'DeporteID',
        foreignKey: 'deporte_id'
      });
      this.hasOne(models.CartasSorpresa, {
        foreignKey: 'cartassorpresa_id'
      });

    }
  }
  Casilla.init({
    posicion: DataTypes.INTEGER,
    con_vs: DataTypes.BOOLEAN,
    con_sorpresa: DataTypes.BOOLEAN,
    con_deporte: DataTypes.BOOLEAN,
    con_player_1: DataTypes.BOOLEAN,
    con_player_2: DataTypes.BOOLEAN,
    con_player_3: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Casilla',
  });
  return Casilla;
};