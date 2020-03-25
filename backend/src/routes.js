const express = require('express');
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create)
module.exports = routes;