const validator = {
  isValid:

  function (logicastring){
    console.log(logicastring, "string")
    let cardNumb = logicastring.split("").reverse()
    console.log(cardNumb,"array")
    let primeiroEvent = 0
    let segundoEvent = 0
    let terceiroEvent = 0

    for (let i=0; i < cardNumb.length;i++) { 
      let num = parseInt(cardNumb[i])
      if ((i % 2 !== 0) && (num>=5)){
        primeiroEvent = (num*2-9);
        console.log(i, num, primeiroEvent,"par maior ou igual a 5")

      }
        else if ((i % 2 !== 0) && (num<=5)) {
    
          segundoEvent = (num *2);
          console.log(i,num,segundoEvent,"par menor ou igual a 5")
    
        }
        else {

          terceiroEvent = (num);
          console.log(terceiroEvent,"impar")
       }     
  }
  if ((primeiroEvent + segundoEvent + terceiroEvent) % 10 !== 0) {
    console.log(primeiroEvent, segundoEvent, terceiroEvent)
    console.log(primeiroEvent + segundoEvent + terceiroEvent)
       
    return true
   }  
     else {
       return false
     }
}
}
  export default validator;
