

var inicio = window.document.getElementById('inicio')
var fim = window.document.querySelector('input#fim')
var passo = window.document.getElementById('passo')
var divResultado = window.document.getElementById('resultado')

function contar(){

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("[ERRO] Faltam dados!")
        divResultado.innerText = `Insira os dados que estão faltando!`
        
    } else {
        divResultado.innerHTML = `Contando:`
        let usuarioInicio = Number(inicio.value)
        let usuarioFim = Number(fim.value)
        let usuarioPasso = Number(passo.value)

        if(usuarioInicio < usuarioFim){
            for(let c = usuarioInicio; c <= usuarioFim; c += usuarioPasso){
                divResultado.innerHTML += ` ${c} \u{1F449} `
        }

            divResultado.innerHTML += `\u{1F3C6}`

        } else {
            for(let i = usuarioInicio; i >= usuarioFim; i -= usuarioPasso){
                divResultado.innerHTML += `${i} \u{1F449}`
            }
                divResultado.innerHTML += `\u{1F3C6}`
        }            
    }

}