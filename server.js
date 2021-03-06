/**
 * server.js - Set up a server
 * @type {Parsers|*}
 */

const path = require('path');
const express = require('express');
const cors = require("cors");
const server = express();
const bodyParser = require('body-parser');
require('dotenv').config();
let errorHandler = require('./src/middleware/error-handlers');

server.use(cors());
server.use(express.json({limit: "50mb"}));
server.use(express.text({limit: "50mb"}));
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.use(bodyParser.json({limit: "50mb"}));
server.use(bodyParser.text({limit: "50mb"}));

const helmet = require('helmet');
server.use(helmet());

const logger = require('morgan');
server.use(logger('dev'));

const mongoose = require('mongoose');
// Connect to the Mongo database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true }).catch(reason => console.log(reason));

const apiRoutes = require('./src/routes');
server.use('/api', apiRoutes);
server.use('/*', errorHandler.invalidRoute);

// Catch all invalid routes
server.use(errorHandler.invalidRoute);

// Handle mongoose errors
server.use(errorHandler.validationErrors);

// Export the server object
module.exports = server;
