const{ Sequelize } =  require('sequelize');

//connection database through sequilize
const sequelize = new Sequelize(
//   'entrepreneurship_database',   // db name
'entrepreneurship_database',
  'root',         // Username
  '', // password
  {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false, // Disable automatic creation of createdAt and updatedAt fields
      },
      logging: console.log,
  }
);
module.exports = sequelize;
