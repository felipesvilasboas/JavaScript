function contar() {
    let inicio = document.querySelector('#in01')
    let fim = document.querySelector('#in02')
    let passo = document.querySelector('#in03')
    let res = document.querySelector('#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert ('ERRO! Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert ('ERRO! Precisa ser maior que zero. Considerando Passo 1')
            p = 1
        }
        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{270D}`
            }

        } else {
            //Contagem regressiva
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{270D}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}