const Sequelize = require('sequelize');
const DataTypes = require('sequelize/lib/data-types');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Pagamento = require('../models/Pagamento');
const Address = require('../models/Address');
const Parcelas = require('../models/Parcelas');
const Tech = require('../models/Tech');
const Receita = require('../models/Receita');
const connection = new Sequelize(dbConfig);



User.init(connection);
Pagamento.init(connection);
Address.init(connection);
Parcelas.init(connection);
Tech.init(connection);
Receita.init(connection)

User.associate(connection.models);
Address.associate(connection.models);
Pagamento.associate(connection.models);
Parcelas.associate(connection.models);
Tech.associate(connection.models);
Receita.associate(connection.models);

module.exports = connection;
