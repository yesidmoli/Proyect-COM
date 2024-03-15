const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const DiagnosticQuestions = require("./DiagnosticQuestions");
const Activities = require("./Activities");
const AssignedActivities = require("./AssignedActivities");
const DiagnosisResponses = require("./DiagnosisResponses");

const Entrepreneur = sequelize.define('Entrepreneur', {
    id: {
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
        allowNull: false,
        validate: {
            len: {
                // Permitir de 7 a 10 dígitos.
                args: [7,10],
                // Mensaje si no se cumple con esta longitud.
                msg: 'El número de documento debe ser de 7 a 10 dígitos'
            }
        }
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
    },
    rol_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // Función de validación personalizada para la contraseña
            validarContrasena(value) {
                if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(value)) {
                    throw new Error('La contraseña debe tener al menos 8 caracteres, incluir al menos una mayúscula, una minúscula, un carácter especial y cinco números.');
                }
            },
        }
    }
}, {
    tableName: 'Entrepreneurs',
    timestamps: false
});

// Relaciones
Entrepreneur.hasMany(DiagnosisResponses, {
    foreignKey: "entrepreneurId",
    sourceKey: "id"
});

DiagnosisResponses.belongsTo(Entrepreneur, {
    foreignKey: "entrepreneurId",
    targetKey: "id"
});

Entrepreneur.hasMany(AssignedActivities, {
    foreignKey: "EntrepreneurId",
    sourceKey: "id"
});

AssignedActivities.belongsTo(Entrepreneur, {
    foreignKey: "EntrepreneurId",
    targetKey: "id"
});


module.exports = Entrepreneur;
