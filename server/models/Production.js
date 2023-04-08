module.exports = function(sequelize, DataTypes) {
    const Production = sequelize.define('Production', {
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
        description: {
            type: DataTypes.STRING
        },
        audio: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        lighting: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        video: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        electrical: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pricePerDay: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    Production.associate = function(models) {
    };

    return Production;
}