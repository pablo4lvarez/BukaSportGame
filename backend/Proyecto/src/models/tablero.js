'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tablero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Match, {
        // as: 'matchid',
        foreignKey: 'match_id'
      });

      this.hasMany(models.Casilla, {
        as: 'casillaID',
        foreignKey: 'casilla_id'
      });
      // define association here
    }
  }
  Tablero.init({
    match_id: DataTypes.INTEGER,
    casilla_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tablero',
  });
  return Tablero;
};