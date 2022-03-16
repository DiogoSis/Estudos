function adicionarProduto(nome, preco) {
    return{
        nome, 
        preco,
        desconto: 0.1
    }

}

console.log(adicionarProduto('Notebook', 2199.49))
console.log(adicionarProduto('Descktop', 1988.99))