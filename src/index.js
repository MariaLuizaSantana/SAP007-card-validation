import validator from './validator.js';

 let botao1 = document.getElementById("botao")
    
  botao1.addEventListener("click",function () {
    let cardNumb = document.getElementById("r1").value
    let resultFinal = validator.isValid(cardNumb)
    console.log(resultFinal)
  });
  
     
 console.log(validator);
