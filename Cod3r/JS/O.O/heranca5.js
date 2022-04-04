console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split ('').reverse().join('')
}
//Split quebra a string e a transforma em arrays
//reverse para fazer a reversão
//join gera uma nova string com valores invertidos

console.log('Escola em casa'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1 ,2 ,3 ,4 ,5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function (){
    return 'Lascou Tudo'
}

console.log('Escola Coder'.reverse())