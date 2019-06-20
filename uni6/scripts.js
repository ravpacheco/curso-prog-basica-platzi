var button = document.getElementById("button");

button.addEventListener("click", executaFizzBuzz);

function executaFizzBuzz() {
  var numMaximo = document.getElementById("input").value;
  var resultado = document.getElementById("result");

  for (var i = 1; i <= numMaximo; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      resultado.insertAdjacentHTML('beforebegin', "<p class='fizbuzz'>FizzBuzz </p>");
    } else if (i % 3 == 0) {
      resultado.insertAdjacentHTML('beforebegin', "<p class='fiz'>Fizz </p>");
    } else if (i % 5 == 0) {
      resultado.insertAdjacentHTML('beforebegin', "<p class='buzz'>Buzz </p>");
    } else {
      resultado.insertAdjacentHTML('beforebegin', "<p>" + i + "</p>");
    }
  }
}
