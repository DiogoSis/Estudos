async function buscaEndereco(cep) {
    var menssagemErro = document.getElementById('erro')
    menssagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()
        if (consultaCEPConvertida.erro) {
            throw Error('Este CEP não existe!')
        }
        var cidade = document.getElementById('cidade')
        var endereco = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        endereco.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade
        estado.value = consultaCEPConvertida.uf


        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro) {
        menssagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))
    // .then(resposta => resposta.json())
    // .then(r => {
    //     if (r.erro){
    //         throw Error('Este CEP não existe')
    //     } else
    //         console.log(r)
    // })
    // .catch(erro => console.log(erro))
    // .finally(mensagem => console.log('processamento concluído!'))

// Teste de Chamada para ação
// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// console.log(conjuntoCeps)
// Promise.all(conjuntoCeps).then(respostas => console.log (respostas))