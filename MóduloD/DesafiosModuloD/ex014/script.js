
function carregar(){
    var hora = new Date()
    var agora = hora.getHours()
    var minutos = hora.getMinutes()
    var msg = window.document.querySelector("div#msg")
    var imagem = window.document.querySelector("img#imagem")
    msg.innerHTML = `Agora é ${agora}:${minutos}.`

    if (agora > 0 && agora <= 12){
        document.body.style.backgroundColor = "#e2cd9f"
        msg.innerHTML += " Bom Dia!"
        imagem.src = "./pexels-james-wheeler-1486974.jpg"
    } else if (agora > 12 && agora < 18){
        document.body.style.backgroundColor = "#b9846f"
        msg.innerHTML += " Boa Tarde!"
        imagem.src = "./pexels-anderson-martins-2386144.jpg"
    } else{
        document.body.style.backgroundColor = "#515154"
        msg.innerHTML += " Boa Noite!"
        imagem.src = "./pexels-pixabay-355465.jpg"
    }

}



