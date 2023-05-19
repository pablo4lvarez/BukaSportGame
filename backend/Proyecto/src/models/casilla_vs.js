'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Casilla_vs extends Model {
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
  Casilla_vs.init({
    deporte_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Casilla_vs',
  });
  return Casilla_vs;
};