const AddressController = require('../controllers/AddressController');
const express = require('express');

const routes = express.Router();



routes.post('/users/:user_id/addresses', AddresController.store);
routes.get('/users/:user_id/addresses', AddresController.list);
