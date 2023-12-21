const { DataTypes } = require("sequelize");
const  sequelize = require("../database/database");

const DiagnosticQuestions = require("./DiagnosticQuestions");

const Sections = sequelize.define('Sections', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    SectionName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'Sections',
    timestamps: false
  });
  
  Sections.hasMany(DiagnosticQuestions, {
    foreignKey:"sectionId",
    sourceKey:"id"
  });
  DiagnosticQuestions.belongsTo(Sections,{
    foreignKey:"sectionId",
    targetId:"id"
  });

module.exports = Sections;