var campoFiltro = document.querySelector("#filtrar-tabela")

//campo de filtragem usando o array
campoFiltro.addEventListener("input", function () {
    console.log(this.value)
    var pacientes = document.querySelectorAll(".paciente")

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector(".info-nome")
            var nome = paciente.textContent
            //expressao regular (O primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (representando como queremos que a expressão regular busque)
            var expressao = new RegExp (this.value,"i")
            //esconder os nomes nao pesquisados
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel")
            } else {
                paciente.classList.remove("invisivel")
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            paciente.classList.remove("invisivel")
        }
    }


})
