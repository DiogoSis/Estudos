const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
//Retornar Arrays somente com os Preços

const paraObjeto = json => JSON.parse(json) // Transformando texto em objeto
const apenasPreco = produto =>produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)