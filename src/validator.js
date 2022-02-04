const validator = {
  isValid:

  function (logicastring){
    const cardnumb = logicastring.split("").reverse()
    let primeiroevnt = 0
    let segundoevt = 0
    let terceiroevt = 0
    let total1 = 0
    let total2 = 0
    let total3 = 0

    for (let i=0; i <cardnumb.length;i++) { 
      const num = parseInt(cardnumb[i])
      if ((i % 2 !== 0) && (num >= 5)) {
        
        total1 = primeiroevnt + (num *2)-9;
      
      }
        else if ((i % 2 !== 0) && (num <=5 )) {
    
          total2 = segundoevt + (num *2);
    
        }
        else {

          total3 = terceiroevt + num;

        }   
      if ((total1 + total2 + total3) % 10 === 0) {
       
        alert("cartão válido")
      }  
        else {
          alert("cartão inválido")
        }
  }
}
}
  export default validator;
