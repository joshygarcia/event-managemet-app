module.exports = function (sequelize, DataTypes) {
  const Production = sequelize.define("Production", {
    productionId: {
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No description",
    },
    audio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    lighting: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    video: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    electrical: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Available",
    },
    pricePerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isNumeric: true,
      },
    },
  })

  return Production
}
