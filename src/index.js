const { response, json } = require('express');
const express = require('express');

const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

app.get('/repositories', (request, response) => {
    return response.json({ message: 'Get funcionando'});
});

app.listen(3333, () => {
    console.log('Backend started!')
});