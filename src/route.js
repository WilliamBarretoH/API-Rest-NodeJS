const express = require('express');
const routes = express.Router();

const ProductControler = require('./controlers/ProductControler');

//chamando o Index do Controller
routes.get('/product', ProductControler.index);

//chamando o Show do Controller
routes.get('/product/:id', ProductControler.show);

//chamando o Store do Controller
routes.post('/product', ProductControler.store);

//chamando o Update do Controller
routes.put('/product/:id', ProductControler.update);

//chamando o Delete do COntroller
routes.delete('/product/:id', ProductControler.delete);



module.exports = routes;