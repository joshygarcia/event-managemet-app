const User = require("./User")

module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define(
    "Company",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      paymentInfo: {
        type: DataTypes.STRING,
      },
      industry: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  )

  return Company
}
