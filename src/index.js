import validator from './validator.js';
//a variavel recebe o id do botao do html//
 let botao1 = document.getElementById("botao")
    //ler o click do botao e executa a função que está no validador//
  botao1.addEventListener("click",function () {
    let cardNumb = document.getElementById("r1").value
    let resultFinal = validator.isValid(cardNumb)
console.log("click",cardNumb,resultFinal)
  });
  
 console.log(validator);
