'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('bookings',
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
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        spot_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'spots', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        // data: string, approved: boolean
        date: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        approved: {
          type: Sequelize.BOOLEAN,
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

    return queryInterface.dropTable('bookings');

  }
};
