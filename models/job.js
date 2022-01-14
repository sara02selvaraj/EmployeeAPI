module.exports = (sequelize, DataTypes) => {
    const Job = sequelize.define("Job", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Job.associate = models => {
        Job.hasMany(models.Employee)
    }

    return Job;
}