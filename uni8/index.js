var expressjs = require("express");

var aplicacao = expressjs();

aplicacao.get("/", hello);
aplicacao.get("/cursos", cursos);
aplicacao.get("/hora", retornaHora);

function retornaHora(req, res){
    res.send("A hora atual é:" + new Date().getHours());
}

function hello(req, res){
    res.send("<h1>Olá tudo bem?</h1>") 
}

function cursos(req, res){
    res.send("<ul><li>Programação básica</li><li>Programação Avançada</li></ul>");
}

aplicacao.listen(8989);
console.log("Aplicação em execução...")