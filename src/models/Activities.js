const { DataTypes } = require("sequelize");
const  sequelize  = require("../database/database");
const DiagnosticQuestions = require("./DiagnosticQuestions");

const Activities = sequelize.define('Activities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ActivityText: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    
    Responsible:{
        type:DataTypes.STRING(50),
        allowNull: true
    }
  }, {
    tableName: 'Activities',
    timestamps: false
  });
  
  Activities.belongsTo(DiagnosticQuestions, {
    foreignkey:"questionId",
    targetId:"id"
  });
  DiagnosticQuestions.hasMany(Activities,{
    foreignkey:"questionId",
    sourceKey:"id"

  });

module.exports = Activities;
