/*criei uma função que recebe todos os valores digitados no input, com uma variável pra cada número*/
function main() 
{
    let n1 = parseInt(document.getElementById("r1").value);
    let n2 = parseInt(document.getElementById("r2").value);
    let n3 = parseInt(document.getElementById("r3").value);
    let n4 = parseInt(document.getElementById("r4").value);
    /* criei uma lista ordem dos numeros e ordem dos numeros pares*/
    let x = ((n1*2)+n2+(n3*2)+n4);
    if(x % 10 === 0) {
        console.log("Cartão Válido");
    } else { console.log("Cartão Inválido");
}
console.log(x % 10);

}