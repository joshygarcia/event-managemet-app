module.exports = function(sequelize, DataTypes) {
    const EventCatering = sequelize.define('EventCatering', {
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        caterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false } );
    
    return EventCatering;

};