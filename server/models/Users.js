module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
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
            notEmpty: true,
            validate: {
                len: [8, 20]
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [2, 34],
                isAlpha: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [10, 10],
                isNumeric: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [3, 34]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [3, 34],
                isAlpha: true
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [2, 2],
                isAlpha: true
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            notEmpty: true,
            validate: {
                len: [5, 5],
                isNumeric: true
            }
        }
    });

    Users.associate = function(models) {
        Users.hasOne(models.Manager, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
        Users.hasOne(models.Company, {
            foreignKey: {
                allowNull: false,
                unique: true
            }
        });
    };

    return Users;
};