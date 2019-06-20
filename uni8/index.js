var express = require("express");
var applicacao = express();

applicacao.get("/", inicio);
applicacao.get("/cursos", cursos);

function inicio(req, resultado)
{
  resultado.send("Está é a <strong>página principal</strong> o/");
}

function cursos(req, resultado)
{
  resultado.send("Aqui estão os <strong>cursos</strong>");
}

applicacao.listen(8989);
console.log("Aplicação está sendo executada...");