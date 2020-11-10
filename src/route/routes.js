const express = require('express')

const PagamentoController = require('../controllers/PagamentoController');
const UserController = require('../controllers/UserController');
const AddresController = require('../controllers/AddressController');
const ParcelasController = require('../controllers/ParcelasController');
const routes = express.Router();


/*
Usuários
 */
routes.post('/users/create', UserController.create);
routes.get('/users/', UserController.show);
routes.delete('/users/delete/:id', UserController.delete);

routes.post('/users/:user_id/addresses', AddresController.store);
routes.get('/users/:user_id/addresses', AddresController.list);

/*
* Pagamento
*/
routes.get('/contas', PagamentoController.list);
routes.post('/contas', PagamentoController.create);
routes.get('/contas/:conta_id/parcelas', PagamentoController.index);

/*
* Parcelas
*/
routes.get('/parcelas', ParcelasController.list);
routes.post('/parcelas/:parcela_id', ParcelasController.update);
routes.post('/parcelas', ParcelasController.create);




module.exports = routes;