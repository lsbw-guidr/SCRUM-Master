require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { verifyAuth } = require('./middleware');
const protectedRouter = require('./routes/protected/index');
const signInRouter = require('./routes/signinRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
function logger (req, res, next){
    console.log(`${req.method} to ${req.url}`);

    next();
}

server.use(logger);


server.use('/user', verifyAuth, protectedRouter);
server.use('/auth', signInRouter);

module.exports = server;
