const express = require('express');

const rotasUsuarios = require('./rota-user');

const PagamentoController = require('../controllers/PagamentoController');
const UserController = require('../controllers/UserController');
const AddresController = require('../controllers/AddressController');
const ParcelasController = require('../controllers/ParcelasController');
const TechController = require('../controllers/TechController');
const ReportController = require('../controllers/ReportController');
const ReceitaController = require('../controllers/ReceitaController');
const routes = express.Router();


/*
Usuários
 */
routes.use(rotasUsuarios);




routes.post('/users/:user_id/addresses', AddresController.store);
routes.get('/users/:user_id/addresses', AddresController.list);

/*
* Receitas
*/
routes.get('/users/:user_id/receitas', ReceitaController.list);
routes.post('/users/:user_id/receitas', ReceitaController.create);


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

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.index);

module.exports = routes;