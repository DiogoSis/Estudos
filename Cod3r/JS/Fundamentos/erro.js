function tratarErroELancar(erro) {
    throw new Error ('...')
}
function imprirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    }
    finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprirNomeGritando(obj)