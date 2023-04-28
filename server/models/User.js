module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
            validate: {
                len: [3, 20],
                isAlpha: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            notEmpty: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                isIn: [['company', 'manager', 'admin']]
            },
            defaultValue: 'company'
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 34]
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: [10, 10],
                isNumeric: true
            },
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 34]
            },
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 34],
                isAlpha: true
            },
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 2],
                isAlpha: true
            },
            allowNull: true
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5, 5],
                isNumeric: true
            },
            allowNull: true
        }
    });

    return User;
};