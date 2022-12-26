export function valida (input){
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if(input.validity.valid){ //criando uma contição pora validar a classe
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-messagem-erro').innerHTML = ''
    }else{
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-messagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissng',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome:{
        valueMissing: "O campo nome não pode estar vazio"
    },
    email:{
        valueMissing:"O campo de email não pode estar vazio",
        typeMismatch:"O email digitado não é válido"
    }, 
    senha:{
        valueMissing: "O campo de senha não pode estar vazio",
        patternMismatch:"A senha deve conter 6 a 12 caractere, deve conter uma letra maiúscula"
    }, 
    dataNascimento:{
        valueMissing: "o campo de data de nascimento não pode estar vazio",
        customError:"você deve ter mais de 18 anos para se cadastrar"
    }, 
    cpf:{
        valueMissing: "O campo do cpf não pode estar vazio",
        customError:"CPF digitado não é valido"
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validaCPF(input)
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    tiposDeErro.forEach(erro =>{
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar!'
    }

    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}

function validaCPF(input){
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado)){
        mensagem = 'O CPF digitado não é valido.'
    }

    input.setCustomValidity(mensagem)
}
function checaCPFRepetido(cpf){
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor =>{
        if(valor == cpf){
            cpfValido = false
        }
    })

    return cpfValido
}