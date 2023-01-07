function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        // os ¨...¨ faz uma copia do parametro e retorna o map para a alteração
        return{...livro,preco : livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}