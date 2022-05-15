module.exports = (sequelize, DataTypes) => {

    const Turnos = sequelize.define('Turnos', {
        nombrePac: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dniPac: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correoPac: {
            type: DataTypes.STRING,
            allowNull: false
        },
        obraSocialPac: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        horario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especialidad: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
    });

    return Turnos;
}