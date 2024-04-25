var express = require('express')
var router = express.Router();
var Usuario = require('../model/Usuario');

router.get('/', function(req,res){
    res.render('index')
})

router.post('/login', function(req,res){
    const {usuario, senha} = req.body;
    if(Usuario.verificarCredenciais(usuario,senha)){
        res.status(200).send('Login deu certo!');
    } else{
        res.status(401).send('Login invalido!');
    }
})


module.exports = router;