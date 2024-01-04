require('dotenv').config()
const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json());

app.listen(3000);


app.get('/', async (req, res) => {
    return res.json('oK')
})


