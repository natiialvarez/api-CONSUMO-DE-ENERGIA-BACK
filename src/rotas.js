const express = require('express');
const { procuraDeFornecedor } = require('./controladores/cliente');
const rotas = express()


rotas.get('/fornecedor', procuraDeFornecedor)

module.exports = rotas;