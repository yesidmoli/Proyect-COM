const { DataTypes } = require("sequelize");
const  sequelize  = require("../database/database");

const DiagnosticQuestions = sequelize.define('DiagnosticQuestions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    QuestionText: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'DiagnosticQuestions',
    timestamps: false
  });
  

  module.exports = DiagnosticQuestions;

