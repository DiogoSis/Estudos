var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("table")
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout")
    setTimeout(function(){
        event.target.parentNode.remove()
    },450)
    
    // var filho = event.target
    // var pai = filho.parentNode

    // pai.remove()
})

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         console.log("fui clicado com duplo clique");
//             this.remove()
//     });
// });