
function tabuada(){

    let numero = window.document.querySelector('input#numtabuada');
    let result = window.document.querySelector('select#resultado');

    if (numero.value.length == 0) {
        window.alert('O campo está vazio. Por favor, digite um número.')
    } else {

        let num = Number(numero.value);
        result.innerHTML = " ";

        for(let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            let resultado = num * i
            result.appendChild(item)
            item.text += `${num} x ${i} = ${resultado}`
        }

    }

    
}