const form = document.getElementById("novoItem"); // formulário que será digitado nome e quantidade
const lista = document.getElementById("lista"); // lista com os itens adicionados
const itens =  JSON.parse(localStorage.getItem("itens")) || []; // buscar array existente no localsStorage ou criar um array

itens.forEach((elemento) => {
    criarElemento(elemento)
})
// ao preencher o formulario
form.addEventListener("submit", (evento) => {
    evento.preventDefault()//interromper o 'enviar' informações para mesma tela no "submit"
    const nome = evento.target.elements['nome']//colocando o nome digitado na variavel 'nome'
    const quantidade = evento.target.elements['quantidade']//colocando a quantidade digitado na variável
    // a pg pergunta se ele existe
    const existe = itens.find(elemento => elemento.nome === nome.value)//se encontrar o elemento com nome idêntico dentro dos itens já existentes no array 'itens', o elemento é atribuido a const 'existe'

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }//criando um objeto para salvar no localStorage
    // se existe ela atualiza o elemento        
    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens [itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
        // se nao, ela cria um elemento        
    } else {
        itemAtual.id = itens [itens.length -1] ? (itens[itens.length -1]).id +1 : 0;//estabelece que o id será do valor do lenght do array 'itens' naquele momento
        criarElemento(itemAtual)
        itens.push(itemAtual)// adicionado o objeto no array []
    }

    localStorage.setItem("itens", JSON.stringify(itens))//incluindo o objeto dentro do localStorage dentro da Key 'itens'


    nome.value = ""
    quantidade.value = ""
})

function criarElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")//criando o elemento tag <button>
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function (){
        deletaElemento(this.parentNode, id)//chama a função para deletar o elemento pai do botão
    })
    return elementoBotao
}
function deletaElemento(tag, id){
    tag.remove()//remove o elemento html

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)//remove o objeto do array
    localStorage.setItem("itens", JSON.stringify.itens)//atualiza o objeto dentro do localStorage dentro da Key 'itens'
}