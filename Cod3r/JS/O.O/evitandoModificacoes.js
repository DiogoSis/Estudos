// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Fulano', preco: 1.89, tag: 'promo'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Branca'
delete produto.tag //você consegue fazer exclusão, mas nao atribuição
console.log(produto)

//Object.seal
// voce consegue alterar os atributos mas nao adicionar ou excluir
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + Valores constantes

