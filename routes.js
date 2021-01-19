const express = require('express');
const routes = express.Router();


routes.get('/', function(req, res) {
    return res.render('freelancers')
})

routes.get('/freelancers', function(req, res) {
    return res.render('freelancers')
})


routes.get('/freelas', function(req, res) {
    return res.render('freelas')
})

//middlewares - funções "do meio" - que intercepta uma determinada função ou bloco de código.
module.exports = routes;