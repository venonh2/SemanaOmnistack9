'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('users',
      {

        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        email: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },

        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      });

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }
};
