var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function () {
    console.log("buscando Baciente")

    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://raw.githubusercontent.com/mmgcnerds/api-pacientes/main/api-pacientes.json")

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            var carregado = document.querySelector("#carregado-ajax")
            carregado.classList.remove("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            // pacientes.forEach(function(paciente) {
            //     adcionaPacienteDaTabela(paciente)
            // });
            pacientes.forEach(paciente => {
                adcionaPacienteDaTabela(paciente)
            });
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel")
        }
    })
    xhr.send()
})

