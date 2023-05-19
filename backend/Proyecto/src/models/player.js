'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Match, {
        through: 'MatchPlayers',
        as: 'Matches',
      });
      this.hasMany(models.Match, {
        foreignKey: 'player_1',
      });
      this.hasMany(models.Match, {
        foreignKey: 'player_2',
      });
      this.hasMany(models.Match, {
        foreignKey: 'player_3',
      });
      this.hasMany(models.Match, {
        foreignKey: 'current_player',
      });
      this.hasMany(models.Session, {
        foreignKey: 'id',
      });
      this.hasOne(models.Player_Stats, {
        as: 'Player_Stats',
        foreignKey: 'player_id',
      });
    }
  }
  Player.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    nickname: DataTypes.STRING,
    email: DataTypes.STRING,
    hash_contrasena: DataTypes.STRING,
    delegacion: DataTypes.STRING,
    puntos: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};