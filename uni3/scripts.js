var peso = parseInt(prompt("Qual seu peso na terra?", 0));

var planeta = prompt(
  "Em qual planeta deseja saber seu peso? (Escolha entre as opções: Marte ou Jupter"
);

var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8;
var pesoFinal;

if (planeta == "Marte") {
  pesoFinal = (peso * gMarte) / gTerra;
  document.writeln("Seu peso em Marte é: " + pesoFinal + "Kg");
} else if (planeta == "Jupter") {
  pesoFinal = (peso * gJupter) / gTerra;
  document.writeln("Seu peso em Jupter é: " + pesoFinal + "Kg");
} else {
  pesoFinal = 999999999999;
  document.writeln(
    "Não conheço esse planeta! Mas seu peso em Krypthon é: " + pesoFinal
  );
}