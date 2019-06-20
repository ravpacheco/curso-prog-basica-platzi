var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("mousedown", comecarDesenho);
document.addEventListener("mousemove", desenharMouse);
document.addEventListener("mouseup", pararDesenho);
document.addEventListener("keydown", desenharTeclado);

var canvas = document.getElementById("meu-canvas");
var papel = canvas.getContext("2d");
var x = 100;
var y = 100;
var mousePressionado = false;

function desenhaLinha(color, xinicial, yinicial, xfinal, yfinal, papel) {
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = 3;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}

function comecarDesenho(event) {
  console.log(event);
  mousePressionado = true;
  x = event.layerX;
  y = event.layerY;
}

function desenharTeclado(evento) {
  var cor = "green";
  var velocidadeMovimento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      desenhaLinha(cor, x, y, x, y - velocidadeMovimento, papel);
      y = y - velocidadeMovimento;
      break;
    case teclas.DOWN:
      desenhaLinha(cor, x, y, x, y + velocidadeMovimento, papel);
      y = y + velocidadeMovimento;
      break;
    case teclas.LEFT:
      desenhaLinha(cor, x, y, x - velocidadeMovimento, y, papel);
      x = x - velocidadeMovimento;
      break;
    case teclas.RIGHT:
      desenhaLinha(cor, x, y, x + velocidadeMovimento, y, papel);
      x = x + velocidadeMovimento;
      break;
  }
}

function desenharMouse(evClick) {
  if (mousePressionado == true) {
    var corMouse = "orange";
    desenhaLinha(corMouse, x, y, evClick.clientX, evClick.clientY, papel);
    x = evClick.clientX;
    y = evClick.clientY;
  }
}

function pararDesenho() {
  mousePressionado = false;
}
