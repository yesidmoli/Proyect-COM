const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');


const Empresario = sequelize.define('Empresario', {
    empresario_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    fecha_diligenciamiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cede: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombres_representante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula_representante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_nacimiento_representante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad_emprendedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado_civil: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nivel_educacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    condicion_especial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    etnia_emprendedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_emprendedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    barrio_emprendedor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comuna_pereira: {
        type: DataTypes.STRING,
        allowNull: false
    },
    antiguedad_meses: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    numero_celular: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    numero_cel_alterno: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nombre_empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    caracteristicas_emprendimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fase_emprendimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad_productiva: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo_organizacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector_economico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector_prioritario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    registro_camara: {
        type: DataTypes.STRING,
        allowNull: false
    },
    renovacion_camara: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagnostico_empresarial : {
        type: DataTypes.STRING,
        allowNull: false
    },
    observaciones: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'Empresario'
});

module.exports = Empresario;
