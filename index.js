const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hey Hero!' });
});

app.listen(8080);

