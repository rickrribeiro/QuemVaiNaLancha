'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Boat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Boat.belongsToMany(models.Person, {foreignKey: 'boat_id', through: 'boat_persons', as: 'persons'});
    }
  };
  Boat.init({
    date: DataTypes.DATE,
    departure: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Boat',
  });
  return Boat;
};