
var cris = new Figura("Cristiane", "Brasil", "Atacante", "./imgs/cris.jpeg");
var marta = new Figura("Marta", "Brasil", "Meio campo", "./imgs/marta.jpg");
var debinha = new Figura("Debinha", "Brasil", "Atacante", "./imgs/debinha.jpg");

var colecaoFiguras = [];

colecaoFiguras.push(cris);
colecaoFiguras.push(marta);
colecaoFiguras.push(debinha);

for(var i = 0; i<colecaoFiguras.length; i++){
    colecaoFiguras[i].exibir();
}