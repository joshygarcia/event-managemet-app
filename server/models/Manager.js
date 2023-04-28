module.exports = (sequelize, DataTypes) => {
  const Manager = sequelize.define(
    "Manager",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "EventManager",
              "SalesManager",
              "MarketingManager",
              "HumanResourcesManager",
              "AccountingManager",
              "ITManager",
            ],
          ],
        },
        defaultValue: "EventManager",
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [
            [
              "Event",
              "Sales",
              "Marketing",
              "Human Resources",
              "Accounting",
              "IT",
            ],
          ],
        },
        defaultValue: "Event",
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
        },
      },
    },
    { timestamps: false }
  )

  return Manager
}
