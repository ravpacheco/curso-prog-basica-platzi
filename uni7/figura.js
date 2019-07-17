class Figura {

  constructor(nome, pais, posicao, urlImagem){
      this.nome = nome;
      this.pais = pais;
      this.posicao = posicao;
      
      this.imagem = new Image(320, 400);
      this.imagem.src = urlImagem;
  }

  falar(){
      alert("Meu nome é: " + this.nome);
  }

  exibir(){
      document.body.appendChild(this.imagem)
      document.write("<br />Nome: " + this.nome + "<br />");
      document.write("Posicao: " + this.posicao + "<br />");
      document.write("Pais: " + this.pais + "<br />");
  }
}