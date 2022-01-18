let num = [5,5,3,6,3,7]
num[1]=9
num.push(4)
num.length //posições do vetor
num.sort()//coloca as posições em ordem
console.log(`o vetor tem ${num.length} posições`)
console.log(`o num tem ${num}`)
for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])//exibindo um a um 
}
for(let pos in num){
    console.log(`a forma simples ${num[pos]}`)//forma mais simples de chamar os arrais
}
num.indexOf(5)//chamar uma posição
console.log(`O VALOR 5 ESTÁ NA POSIÇÃO ${pos}`)