'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartasSorpresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Casilla, {
        // as: 'casillaid',
        foreignKey: 'casilla_id'
      });
    }
  }
  CartasSorpresa.init({
    imagen: DataTypes.STRING,
    texto: DataTypes.STRING,
    efecto: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartasSorpresa',
  });
  return CartasSorpresa;
};