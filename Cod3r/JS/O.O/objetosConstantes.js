//pessoa -> 123 ->{...}
const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log (pessoa)

Object.freeze(pessoa) //nao deixa ninguem alterar o obj

pessoa.nome = 'Maria'
pessoa.end = 'Rua Abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
