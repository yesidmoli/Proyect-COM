const app =  require("./app.js");
const sequelize = require('./database/database.js');
const Sections = require('./models/Sections');
const DiagnosticQuestions = require('./models/DiagnosticQuestions');
const Activities = require('./models/Activities');
const AssignedActivities = require('./models/AssignedActivities');
const DiagnosisResponses = require("./models/DiagnosisResponses.js");
const Entrepreneur = require("./models/Entrepreneur.js");

async function main() {
    try {
        // Synchronize models with the database
        await sequelize.sync({ force: false });
        console.log('Models synchronized with the database.');


        // Start the server
        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
        
        console.log('Database connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();