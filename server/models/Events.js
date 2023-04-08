module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {
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
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    });

    Events.associate = function(models) {
        Events.belongsTo(models.Manager, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
        Events.belongsTo(models.Company, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
        Events.belongsTo(models.Venues, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
        Events.belongsTo(models.Production, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
        Events.belongsTo(models.Caters, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
    };

    return Events;
}