var colecaoFiguras = [];
colecaoFiguras.push(new Figura("Marta", "Brasil", "Meio campo", "./imgs/marta.jpg"));
colecaoFiguras.push(new Figura("Cristiane", "Brasil", "Atacante", "./imgs/cris.jpeg"));
colecaoFiguras.push(new Figura("Formiga", "Brasil", "Volante", "./imgs/formiga.jpeg"));
colecaoFiguras.push(new Figura("Thaissa Moreno", "Brasil", "Volante", "./imgs/thais.jpg"));
colecaoFiguras.push(new Figura("Debinha", "Brasil", "Ponta direita", "./imgs/debinha.jpg"));

for(var figurinha of colecaoFiguras)
{
  figurinha.exibir();
}

for(var x in colecaoFiguras[0])
{
  console.log(x);
}
