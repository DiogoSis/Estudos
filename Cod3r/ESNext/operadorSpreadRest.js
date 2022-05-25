//Operador ... Rest(juntar)/Spread(espalhar)
//usar rest com parametros de função

//usar spread com objeto
const funcionarios = { nome: 'Maria', salario: 12348.76}
const clone = { ativo: true, ...funcionarios}
console.log(clone)

// usar spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) 