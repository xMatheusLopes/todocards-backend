const express = require('express');
const app = express();
const routes = require('./src/routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://matheus:matheus@todocards-fk2cp.mongodb.net/todocards?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
