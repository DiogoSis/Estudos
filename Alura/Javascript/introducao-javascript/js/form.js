var adicionar = document.querySelector("#adicionar-paciente");
adicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = pacienteFormulario(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
       exibeMensagemDeErro(erros) 
        return;
    }
    adcionaPacienteDaTabela(paciente)

    form.reset()
    var mensagensDeErro = document.querySelector("#mensagens-erro")
    mensagensDeErro.innerHTML = ""

});

function adcionaPacienteDaTabela (paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){

    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function pacienteFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente
};

function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros =[];

    if(paciente.nome.length == 0){
        erros.push("O Nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso Inválido")     
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura Inválida")    
    }

    if(paciente.gordura.length == 0){
        erros.push("favor preencher a porcentagem de gordura")
    }

    if(paciente.peso.length == 0){
        erros.push("o peso nao pode ser em braco")
    }

    if(paciente.altura.length == 0){
        erros.push("a altura nao pode ser em braco")
    }


    return erros;
}