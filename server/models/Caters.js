module.exports = function(sequelize, DataTypes) {
    const Caters = sequelize.define('Caters', {
        id: {
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
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pricePerDay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        menu: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pricePerPerson: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        diets: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alcohol: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { timestamps: false } );

    Caters.associate = function(models) {

    };

    return Caters;
}