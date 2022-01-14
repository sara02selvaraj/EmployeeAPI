module.exports = (sequelize, DataTypes) => {
    const Gender = sequelize.define("Gender", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Gender.associate = models => {
        Gender.hasMany(models.Employee)
    }

    return Gender;
}