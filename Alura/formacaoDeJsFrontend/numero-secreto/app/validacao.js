function verificaSeOValorEValido(chute){
    const numero =+chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (numeroForMaiorQuePermitido(numero)){
        elementoChute.innerHTML +=`<div>Numero inválido: o número tem que estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Acertouuu Miseravi!</h2>
        <h3>o numero secreto era <span>${numeroSecreto}</span></h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-1-9"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-1-9"></i></div>`
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroForMaiorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
