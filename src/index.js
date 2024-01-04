require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000);


app.get('/teste', async (req, res) => {
    return res.json('oK')
})


