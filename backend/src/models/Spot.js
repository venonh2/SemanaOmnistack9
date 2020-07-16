const { Model, DataTypes } = require('sequelize');

class Spot extends Model {
    static init(sequelize) {
        super.init({
            thumbnail: DataTypes.STRING(50),
            company: DataTypes.STRING(50),
            price: DataTypes.FLOAT,
            techs: DataTypes.STRING,
        }, {
            sequelize,
         //   modelName: 'user'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});

        this.hasMany(models.Booking, {foreignKey: 'spot_id', as: 'bookings'})
    }
}


module.exports = Spot;

/* // thumbail, company, price, techs







*/