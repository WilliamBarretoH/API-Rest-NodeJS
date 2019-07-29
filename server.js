const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


// Iniciando o app
const app = express();

//Permitir a API receber dados JSON
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true}
);

// Fazendo requisição dos modelos, exemplo: product.js
requireDir('./src/models'); 


//Rotas
app.use('/api', require('./src/route'));


// Porta utilizada
app.listen(3030);

