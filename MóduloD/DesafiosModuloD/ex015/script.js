
var data = new Date();
var ano = data.getFullYear();

function verificar(){
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var genero = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)

    var img = document.createElement('img');
    img.setAttribute('id','foto');

    if (fano.value.lenght == 0 || Number(fano.value) > 2022){
        window.alert("[ERRO] Reveja os dados inseridos e tente novamente!")

    } else {
         var sexo = '';

        if (genero[0].checked) {
            
            sexo = "homem"
        }
            if(idade > 0 && idade < 10 && sexo == "homem"){
                img.setAttribute('src','./imagens/bebe-menino.jpg')
            }
            else if (idade >= 10 && idade < 21 && sexo == "homem"){
                img.setAttribute('src','./imagens/menino-adolescente.jpg')
            }
            else if (idade > 21 && sexo == "homem") {
                img.setAttribute('src','./imagens/homem-idoso.jpg')
            }
        
         else 
         
            if (genero[1].checked) {

                sexo ="mulher"
            }
            if(idade > 0 && idade < 10 && sexo == "mulher"){
                img.setAttribute('src','./imagens/bebe-menina.jpg')
            }
            else if (idade >= 10 && idade < 21 && sexo == "mulher"){
                img.setAttribute('src','./imagens/menina-adolescente.jpg')
            }
            else if (idade > 21 && sexo == "mulher") {
                img.setAttribute('src','./imagens/mulher-idosa.jpg')
            }
        }

        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${sexo} de ${idade} anos de idade!`
        res.appendChild(img)
        
    }
