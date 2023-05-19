'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player_Stats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Player, {
        // as: 'playerid',
        foreignKey: 'player_id'
      });
    }
  }
  Player_Stats.init({
    player_id: DataTypes.INTEGER,
    fuerza: DataTypes.INTEGER,
    velocidad: DataTypes.INTEGER,
    resistencia: DataTypes.INTEGER,
    coordinacion: DataTypes.INTEGER,
    inteligencia: DataTypes.INTEGER,
    equilibrio: DataTypes.INTEGER,
    puntos_competencia: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Player_Stats',
  });
  return Player_Stats;
};