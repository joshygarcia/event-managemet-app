module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Users',
                key: 'userId'
            }
        },
        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['EventManager', 'SalesManager', 'MarketingManager', 'HumanResourcesManager', 'AccountingManager', 'ITManager']]
            },
            defaultValue: 'EventManager'
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['Event', 'Sales', 'Marketing', 'Human Resources', 'Accounting', 'IT']]
            },
            defaultValue: 'Event'
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    }, { timestamps: false, primaryKey: false });

    Manager.associate = function(models) {
        Manager.hasMany(models.Events, {
            foreignKey: {
                name: "managerId"
            },
            references: {
                model: 'Manager',
                key: 'userId'
            }
        });
        Manager.belongsTo(models.User, {
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
    return Manager;
}