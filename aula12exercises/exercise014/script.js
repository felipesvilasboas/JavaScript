function carregar() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#img')
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'images/manhã.jpg'
        document.body.style.background = '#C1E5FD'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#95230F'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#4D2B25'
    }

}