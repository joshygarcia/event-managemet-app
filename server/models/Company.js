const Users = require("./Users");

module.exports = function(sequelize, DataTypes) {
    const Company = sequelize.define('Company', {
        paymentInfo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false } );

    Company.associate = function(models) {
        Company.hasMany(models.Events, {
            foreignKey: {
                allowNull: false
            }
        });
        Company.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false,
                unique: true
                }
        });
        Company.hasMany(models.Events, {
            foreignKey: {
                allowNull: false
            }
        }); 
    };
    
    return Company;
}