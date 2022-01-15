'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('boat_persons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      boat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'boats', key: 'id' },
        onDelete: 'CASCADE'
      },
      person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'persons', key: 'id' },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('boat_persons');
  }
};