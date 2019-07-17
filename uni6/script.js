var botao = document.getElementById("botao");

botao.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz(){

    var numIteracoes = document.getElementById("numIteracoes").value;
    var resultado = document.getElementById("resultado");

    var numero = 1;
    while(numero <= numIteracoes){
        if(((numero % 5) == 0) && (numero % 3) == 0 ){
            console.log("FizzBuzz")
            resultado.insertAdjacentHTML('beforeend', "<p class='fizbuzz'>FizzBuzz </p>");
        }else if((numero % 3) == 0){
            console.log("Fizz")
            resultado.insertAdjacentHTML('beforeend', "<p class='fiz'>Fizz </p>");
        } else if((numero % 5) == 0){
            console.log("Buzz")
            resultado.insertAdjacentHTML('beforeend', "<p class='buzz'>Buzz </p>");
        } else {
            console.log(numero)
            resultado.insertAdjacentHTML('beforeend', "<p>" + numero + "</p>");
        }
        numero++;
    }
}