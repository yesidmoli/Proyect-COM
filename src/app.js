const express = require("express");
const morgan =  require("morgan");

const routes = require('./routes');

// express initialization

const app = express();


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/',routes());

module.exports = app;