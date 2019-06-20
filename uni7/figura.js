class Figura
{
  constructor(nome, pais, posicao, urlImagem)
  {
    this.imagem = new Image(320, 400);
    this.nome = nome;
    this.pais = pais;
    this.posicao = posicao;

    this.imagem.src = urlImagem;
  }

  falar()
  {
    alert(this.nombre);
  }

  informaPosicao()
  {
    return this.posicao;
  }

  exibir()
  {
    document.body.appendChild(this.imagem);
    document.write("<br /><strong>" + this.nome + "</strong><br />");
    document.write("Pais: " + this.pais + "<br />");
    document.write("Posição: " + this.posicao + "<hr />");
  }
}