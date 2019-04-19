// Adivinhe o número

var numeroOculto = Math.round(Math.random()*10)
var acertou = false;
var chute
console.log(numeroOculto);
while (acertou==false){
    chute = parseInt(prompt('Tenta adivinhar o número'))
if (chute == numeroOculto){
    acertou = true
alert("Parabéns, você acertou")
} 
}

// 0 a 10

var numero = 0

while (numero<=10){
    console.log(numero)
numero++
}
