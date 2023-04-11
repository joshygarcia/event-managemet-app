const User = require("./User");

module.exports = function(sequelize, DataTypes) {
    const Company = sequelize.define('Company', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'userId'
            }
        },
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
                name: "companyId"
            },
            references: {
                model: 'Company',
                key: 'userId'
            }
        });
        Company.belongsTo(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            },
            references: {
                model: 'Users',
                key: 'userId'
            },
            onDelete: "cascade",
            hooks: true,
            unique: true
        });
    };
    
    return Company;
}