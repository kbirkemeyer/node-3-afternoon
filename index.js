require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

app.listen(SERVER_PORT, () => {console.log(`Server is listening: port ${SERVER_PORT}`)};)