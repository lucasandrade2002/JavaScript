
let num = [4,6,8,9,10,11,21,32]
/*
for (let i = 0; i < num.length ; i++) {
    console.log(`O elemento da posição ${i} é igual a ${num[i]}.`)
}
*/

let usuario = 32;

for (let i = 0; i < num.length ; i++){
    if (num[i] == usuario){
        console.log(`O elemento procurado, que tem o valor ${usuario} está na posição ${i}.`)
    } else{
        console.log(`O elemento da posição ${i} é igual a ${num[i]}.`)
    }
}

var posicao = num.indexOf(10)
console.log(posicao)
