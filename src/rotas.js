const express = require('express');
const { procuraDeFornecedor } = require('./controladores/cliente');
const inserirFornecedor = require('./controladores/fornecedores');
const rotas = express()


rotas.post('/fornecedor', procuraDeFornecedor)
rotas.post('/cadastro', inserirFornecedor)

module.exports = rotas;