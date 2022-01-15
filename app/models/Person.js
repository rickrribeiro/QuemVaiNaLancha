'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.belongsToMany(models.Room, {foreignKey: 'person_id', through: 'room_persons', as: 'rooms'});
      Person.belongsToMany(models.Boat, {foreignKey: 'person_id', through: 'boat_persons', as: 'boats'});

    }
  };
  Person.init({
    date: DataTypes.DATE,
    departure: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};