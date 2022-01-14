module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("Address", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Address.associate = models => {
        Address.hasOne(models.Employee)
    }

    return Address;
}