'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('spots',
      {

        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },

        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        thumbnail: {
          type: Sequelize.STRING(50),
          allowNUll: false,
        },

        company: {
          type: Sequelize.STRING(50),
          allowNUll: false,
        },

        price: {
          type: Sequelize.FLOAT,
          allowNUll: false,
        },

        techs: {
          type: Sequelize.STRING,
          allowNUll: false,
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

    return queryInterface.dropTable('spots');

  }
};
