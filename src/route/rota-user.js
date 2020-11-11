const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/UserController');

routes.post('/users/create', UserController.create);
routes.get('/users/', UserController.show);
routes.delete('/users/delete/:id', UserController.delete);
routes.put('/users/:user_id/update', UserController.update);


module.exports = routes;
