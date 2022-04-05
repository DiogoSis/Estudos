const pilotos = ['p1','p2', 'p3', 'p4']
pilotos.pop()//p4 quebrou o carro
console.log(pilotos)

pilotos.push('p5')
console.log(pilotos)

pilotos.shift()// remove o primeiro
console.log(pilotos)

pilotos.unshift('p6')
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'p7', 'p4')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//p4 quebrou
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) //novo array
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1,4)
console.log(algunspilotos2)