module.exports = function (sequelize, DataTypes) {
  const Cater = sequelize.define(
    "Cater",
    {
      caterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      zip: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      availability: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      menu: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      pricePerPerson: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      diets: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      alcohol: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
    },
    { timestamps: false }
  )

  return Cater
}
