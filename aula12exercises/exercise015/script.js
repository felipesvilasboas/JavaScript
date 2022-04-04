function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano || fano.value < 1850) {
        alert('ERRO! Verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/01-h.webp')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/02-h.jpeg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/02-h.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/03-h.jpeg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/01-m.jpeg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/02-m.jpeg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/02-m.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/03-m.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)















}