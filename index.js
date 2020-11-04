require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

const {getAll, getOne, update, create, delete} = require('./product_controller') 

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('Successfully connected to server')
}).catch((err) => {
    console.log(err)
});

app.use(express.json());

app.get('/api/products', getAll);

app.get('/api/products/:id', getOne);

app.put('/api/products/:id', update);

app.post('/api/products', create);

app.delete('/api/products/:id', delete);

app.listen(SERVER_PORT, () => {console.log(`Server is listening: port ${SERVER_PORT}`)});