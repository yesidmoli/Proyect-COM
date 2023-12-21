const { DataTypes } = require("sequelize");
const sequelize  = require("../database/database");

const Activities = require("./Activities");

const AssignedActivities = sequelize.define('AssignedActivities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CompletionDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Observations: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    
  }, {
    tableName: 'AssignedActivities',
    timestamps: false
  });
  
  // many to one relationship
  AssignedActivities.belongsTo(Activities,{
    foreignKey:"activitiesId",
    targetId:"id"
    
  });

  // // One to many relationship
  Activities.hasMany(AssignedActivities,{
    foreignKey:"activitiesId",
    sourceKey:"id"
  });

  module.exports = AssignedActivities;