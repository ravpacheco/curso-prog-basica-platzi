var canvas = document.getElementById("fazendaPlatzi");
var papel = canvas.getContext("2d");

var fundo = {
  url: "./imgs/fundo.png",
  carregado: false
}
var vaca = {
  url: "./imgs/vaca.png",
  carregado: false
};

var quantidade = numAleatorio(1, 10);

fundo.imagem = new Image();
fundo.imagem.src = fundo.url;
fundo.imagem.addEventListener("load", carregarFundo);

vaca.imagem = new Image();
vaca.imagem.src = vaca.url;
vaca.imagem.addEventListener("load", carregarVaca);

function carregarFundo()
{
  fundo.carregado = true;
  desenhar();
}
function carregarVaca()
{
  vaca.carregado = true;
  desenhar();
}

function desenhar()
{
  if(fundo.carregado)
  {
    papel.drawImage(fundo.imagem, 0, 0);
  }
  if(vaca.carregado)
  {
    console.log(quantidade);
    for(var v=0; v < quantidade; v++)
    {
      var x = numAleatorio(1, 10);
      var y = numAleatorio(1, 10);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(vaca.imagem, x, y);
    }
  }
}

function numAleatorio(min, maxi)
{
  return Math.floor(Math.random() * (maxi - min + 1)) + min;
}