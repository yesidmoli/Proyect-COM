const express = require("express");
const morgan =  require("morgan");

const routes = require('./routes');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const cors = require('cors');

// express initialization

const app = express();


// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


// Habilitar cors.
app.use(cors({
    origin: 'http://localhost:3000',
    // Establecer las cookies al frontend.
    credentials: true
}));

// Routes
app.use('/',routes());

module.exports = app;
