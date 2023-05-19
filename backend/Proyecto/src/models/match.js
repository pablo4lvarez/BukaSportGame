const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Player, {
        as: 'player1',
        foreignKey: 'player_1',
      });
      this.belongsTo(models.Player, {
        as: 'player2',
        foreignKey: 'player_2',
      });
      this.belongsTo(models.Player, {
        as: 'player3',
        foreignKey: 'player_3',
      });
      this.belongsTo(models.Player, {
        as: 'currentPlayer',
        foreignKey: 'current_player',
      });
      this.hasOne(models.Tablero, {
        as: 'tableroID',
        foreignKey: 'id', //OJO Q CAMBIE ACA PROBANDO, IBA tablero_id
      });
    }
  }
  Match.init({
    turnos: DataTypes.INTEGER,
    position_1: DataTypes.INTEGER,
    position_2: DataTypes.INTEGER,
    position_3: DataTypes.INTEGER,
    pos1_anterior: DataTypes.INTEGER,
    pos2_anterior: DataTypes.INTEGER,
    pos3_anterior: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};
