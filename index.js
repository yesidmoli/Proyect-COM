const express = require('express');
const router = require('./routes');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize, testConnection } = require('./config/database');
// Conocer las solicitudes HTTP que se envían al server.
const morgan = require('morgan');



const app = express();

// Testear la conexión a la base de datos
testConnection();

// Sincronizar el modelo con la base de datos
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Base de datos sincronizada');
//   })
//   .catch((error) => {
//     console.error('Error al sincronizar la base de datos:', error);
//   });

// Middleware
app.use(morgan("dev"));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Habilitar cors
app.use(cors());

app.use('/', routes());

app.listen(5000);
