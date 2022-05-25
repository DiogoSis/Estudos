const tecnologias = new Map()
tecnologias.set ('react', {framework: false})
tecnologias.set ('angular', {framework: true})

console.log (tecnologias.react) //forma errada para acessar
console.log (tecnologias.get('react').framework) // forma correta

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'], 
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
console.log(chavesVariadas.Map)