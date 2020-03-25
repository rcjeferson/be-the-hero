const express = require('express');
const OngController = require('./controllers/OngController')
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.post('/sessions', SessionController.create)
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
module.exports = routes;