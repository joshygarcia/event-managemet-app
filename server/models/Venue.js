module.exports = function(sequelize, DataTypes) {
    const Venue = sequelize.define('Venue', {
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        capacity: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true
        },
        pricePerDay: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true
        },
        availability: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true
        }
    }, { timestamps: false } );

    Venue.associate = function(models) {

    };

    return Venue;
}