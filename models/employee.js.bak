module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        firstName : {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    Employee.associate = models => {
        Employee.belongsTo(models.Job);
        Employee.belongsTo(models.Department);
        Employee.belongsTo(models.Gender);
        Employee.belongsTo(models.Address);
    }
    return Employee;
}