module.exports = (sequelize, DataTypes) => {
    const Events = sequelize.define('Events', {
        eventId: {
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
            type: DataTypes.DATE
        },
        time: {
            type: DataTypes.TIME
        }
    });

    Events.associate = function(models) {
        Events.belongsTo(models.Venue, {
            foreignKey: "venueId",
            references: {
                model: "Venue",
                key: "venueId"
            }
        });
        Events.belongsToMany(models.Production, {
            through: "EventProduction",
            foreignKey: "eventId",
            references: {
                model: "Events",
                key: "eventId"
            }
        });
        Events.belongsToMany(models.Cater, {
            through: "EventCatering",
            foreignKey: "eventId",
            references: {
                model: "Events",
                key: "eventId"
            }
        });
    };

    return Events;
}