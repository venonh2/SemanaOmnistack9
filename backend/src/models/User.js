const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            email: DataTypes.STRING(50),
        }, {
            sequelize,
         //   modelName: 'user'
        })
    }

    static associate(models) {
        this.hasMany(models.Spot, {foreignKey: 'user_id', as: 'spots'});

        this.hasMany(models.Booking, {foreignKey: 'user_id', as: 'bookings'});
    }
}

module.exports = User; 

/*




*/