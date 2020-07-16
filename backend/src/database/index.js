const Sequelize = require('sequelize');
const dbConfig = require('./connetion');

const connection = new Sequelize(dbConfig);

const User = require('../models/User')
const Spot = require('../models/Spot')
const Booking = require('../models/Booking')
//
User.init(connection);
Spot.init(connection);
Booking.init(connection);

// associações
User.associate(connection.models);
Spot.associate(connection.models);
Booking.associate(connection.models);

module.exports = connection