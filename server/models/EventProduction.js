module.exports = function(sequelize, DataTypes) {
    const EventProduction = sequelize.define('EventProduction', {
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        productionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false } );

    return EventProduction;

};
