const validator = {
  isValid:

function (logicaString){
  console.log(logicaString, "string")
  let cardNumb = logicaString.split("").reverse()
  console.log(cardNumb,"array")
  let primeiroEvent = 0
  let segundoEvent = 0
  let terceiroEvent = 0

  for (let i=0; i < cardNumb.length;i++) { 
    let num = parseInt(cardNumb[i])
    if ((i % 2 !== 0) && (num>=5)){
      primeiroEvent = primeiroEvent + ((num*2)-9);
      console.log(i, num, primeiroEvent,"par maior ou igual a 5")

      }
      else if ((i % 2 !== 0) && (num<=5)) {
    
        segundoEvent = segundoEvent + (num *2);
        console.log(i,num,segundoEvent,"par menor ou igual a 5")
    
        }
        else {

          terceiroEvent = terceiroEvent + (num);
        console.log(terceiroEvent,"impar")

       }

  }
  let sumFinal = 0
    for (let i=0; i < cardNumb.length;i++) {
    sumFinal = sumFinal + primeiroEvent + segundoEvent + terceiroEvent
    console.log(sumFinal)
  if (sumFinal % 10 === 0) {  
    alert ("cartão válido")
   }  
     else {
       alert ("cartão Inválido")
     }
    }
    console.log(sumFinal)

    if ((botao).value.length < 4){
      alert ("Por favor preecha o número do cartão")
    }

}


}

  export default validator;

