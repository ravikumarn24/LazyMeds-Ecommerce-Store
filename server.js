'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/getgAPI', (req, res) => res.json({ route: req.originalUrl }));
router.get('/getCloudinaryAPI', (req, res) => res.json({ "name": "aswin" }));

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

module.exports = app;
module.exports.handler = serverless(app);
