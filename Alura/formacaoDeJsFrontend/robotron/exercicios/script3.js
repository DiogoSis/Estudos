// const lista = document.querySelector("ul");
// document.querySelector("#botao").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "mostrar");
// });

// document.querySelector(".close").addEventListener("click", () => {
//   lista.setAttribute("data-lista", "esconder");
// });

// const lista = document.getElementById("lista")

// function mostrarTintas() {
//   if (lista.classList.contains("lista_show")) {
//     lista.classList.remove("lista_show")
//   } else {
//     lista.classList.add("lista_show")
//   }
// }

const lista = document.querySelector('.lista')

function mostrarTintas() {
    const botao = document.querySelectorAll('button')

    botao.forEach((evento) =>{
        evento.addEventListener('click', () =>{
            let atributo = el.getAttribute('abrir')
            let estado = atributo === 'mostrar' ? 'block' : 'none'
            lista.style.display = estado
        })
    })
}