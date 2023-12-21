const { DataTypes } = require("sequelize");
const  sequelize  = require("../database/database");
const DiagnosticQuestions = require("./DiagnosticQuestions");

const DiagnosisResponses = sequelize.define('DiagnosisResponses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    response: {
        type: DataTypes.STRING(5), // Puede ser 'SI', 'NO', 'N/A', etc.
        allowNull: false,
    },
    // Otros campos según tus necesidades
}, {
    tableName: 'DiagnosisResponses',
    timestamps: false
});

DiagnosisResponses.belongsTo(DiagnosticQuestions, {
    foreignKey: "questionId",
    targetKey: "id"
});

DiagnosticQuestions.hasMany(DiagnosisResponses, {
    foreignKey: "questionId",
    sourceKey: "id"
});

module.exports = DiagnosisResponses;