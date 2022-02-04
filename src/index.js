import validator from './validator.js';

 const botao1 = document.getElementById("botao")
    
  botao1.addEventListener("click",function () {
    const cardnumb = document.getElementById("r1").value
    const resultfinal = validator.isValid(cardnumb)
    console.log(cardnumb,resultfinal)
  });
  
     
 console.log(validator);
