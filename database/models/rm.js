'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  RM.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    genre: DataTypes.STRING,
    species: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RM',
  });
  return RM;
};