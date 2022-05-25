//nao aceita repeticao / nao indexada
const times = new Set()
times.add('Vasco')
times.add('Vasco').add('Palmeiras').add('Corinthias')// pode ser adicionada de maneira cadeada
times.add('Flamengo')
times.add('Vasco')//nao aceita repetiçao

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // lucas é removido da repeticao
const nomesSet = new Set (nomes)
console.log (nomesSet)