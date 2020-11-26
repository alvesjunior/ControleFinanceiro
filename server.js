const http = require('http');
const app = require('./app');
const sequelize = require('./src/database/index')
const port = process.env.Port || 3333;
const server = http.createServer(app);
server.listen(port);
