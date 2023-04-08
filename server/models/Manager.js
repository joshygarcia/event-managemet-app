module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    Manager.associate = function(models) {
        Manager.hasMany(models.Events, {
            foreignKey: {
                allowNull: false
            }
        });
        Manager.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false,
                unique: true
                }
        });
    };
    return Manager;
}