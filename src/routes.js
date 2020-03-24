const express = require('express');

const routes = express.Router();

routes.use(express.json());

routes.get('/', (request, response) => {
    return response.json({ message: 'Hey Hero!' });
});

module.exports = routes;