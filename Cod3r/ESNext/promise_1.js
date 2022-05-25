let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
// promise só gera apenas um valor
function primeiroElemento(array){
    return array[0]
}
function primeiraLetra(string){
    return string[0]
}
const letraMinuscula = letra =>letra.toLowerCase()

p
    .then (primeiroElemento)
    .then (primeiraLetra)
    .then (letraMinuscula)
    //.then(primeiro =>primeiro[0])
    //.then(valor => valor[0])
    //.then(valor => console.log(valor))
    //.then(letra => letra.toLowerCase()) 
    //.then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log)
