const express = require('express');
const routes = express.Router();


routes.all('/', function(req, res) {
    return res.render('yourFreelancers')
})

//middlewares - funções "do meio" - que intercepta uma determinada função ou bloco de código.
module.exports = routes;