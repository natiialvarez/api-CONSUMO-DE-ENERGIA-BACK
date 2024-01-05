const express = require('express');
const { procuraDeFornecedor } = require('./controladores/cliente');
const rotas = express()


rotas.post('/fornecedor', procuraDeFornecedor)

module.exports = rotas;