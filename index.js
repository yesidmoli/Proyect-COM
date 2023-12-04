const express = require('express');
const routes = require('./routes');
//const mongoose = require('mongoose');


//importar para que acepte el formato json
const bodyParser = require('body-parser');

//crear el servidor

const app = express();

//mongoso se remplaza por la bd que se va usar
//mongoose.set('strictQuery', true);
//conexion a mongose

//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/SeepApi');

//usando bodyParse para que acepte formato json y decodifique la url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))



//ruta
app.use('/',routes());

//puerto
app.listen(5000);