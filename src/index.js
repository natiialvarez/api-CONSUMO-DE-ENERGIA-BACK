const express = require('express');
const rotas = require('./rotas');
const app = express();

// Definição manual dos cabeçalhos CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo seu domínio de frontend
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(rotas);
app.listen(3000);