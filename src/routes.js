const express = require('express');
const app = express.Router();

const login = require('./controllers/LoginController');

app.post('/login', login.store);

module.exports = app;