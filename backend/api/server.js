require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { verifyAuth } = require('./middleware');
const protectedRouter = require('./routes/protected/index');
const signInRouter = require('./routes/signinRoutes');
const publicRouter = require('./routes/public/publicRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

function logger (req, res, next){ // logs every method and its path
    console.log(`${req.method} to ${req.url}`);
    next();
}

server.use(logger);


server.use('/user', verifyAuth, protectedRouter);
server.use('/auth', signInRouter);
server.use('/public', publicRouter); // serves files that do not require authorization

module.exports = server;
