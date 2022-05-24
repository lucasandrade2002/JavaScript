
let dadosE = window.document.getElementById('entrada');
let dadosS = window.document.getElementById('saida');
let res = window.document.getElementById('resultado')
let vetor = [];

function adicionar() {

    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else{
            return false
        }
    }

    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        } else{
            return false
        }
    }

    if (isNumero(dadosE.value) && !inLista(dadosE, vetor)) {

        vetor.push(Number(dadosE.value))

        let item = document.createElement('option')
        item.text = `O valor ${dadosE.value} foi adicionado.`
        dadosS.appendChild(item);
        res.innerHTML = " ";

    } else {
        window.alert("Valor inválido ou já encontrado na lista.")
    }

    dadosE.value = ' ';
    dadosE.focus(); //Atributo que após a digitação, volta automaticamente o cursor do mouse para o campo. 

}

function finalizar(){
    if(vetor.length == 0){
        window.alert("Adicione valores antes de finalizar.")
    } else{
        let total = vetor.length

        let maior = vetor[0];
        let menor = vetor[0];
        let soma = 0;
        let media = 0;
        media = soma/total

        for (let i = 0; i <= vetor.length; i++){
            if(vetor[i] > maior){
                maior = vetor[i]
            } else if(vetor[i] < menor) {
                menor = vetor[i]
            }
        }

        for(c in vetor){
            soma += vetor[c];
            media = soma/total
        }

        res.innerText = ` `;
        res.innerText += `Ao todo, temos ${total} números cadastrados.`
        res.innerHTML += `<p>O maior valor digitado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor digitado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores digitados é de ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media.toFixed(2)}.</p>`
    }
}