const { Model, DataTypes } = require('sequelize');
// n para n
class Booking extends Model {
    static init(sequelize) {
        super.init({
            date: DataTypes.STRING(50),
            approved: DataTypes.BOOLEAN,
        }, {
            sequelize,
         //   modelName: 'user'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'});

        this.belongsTo(models.Spot, {foreignKey: 'spot_id', as: 'spots'});
    }
}


module.exports = Booking;

/* // thumbail, company, price, techs







*/