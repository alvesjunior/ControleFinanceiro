const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rotas = require('./src/route/routes');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/api',rotas);


module.exports = app