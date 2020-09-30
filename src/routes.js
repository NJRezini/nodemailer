const express = require('express');
const routes = express.Router();

const mailer = require('./app/controllers/mailer');

routes.get('/mail', mailer.main);

module.exports = routes;
