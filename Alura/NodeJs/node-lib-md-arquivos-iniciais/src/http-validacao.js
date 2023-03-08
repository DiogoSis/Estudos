import chalk from "chalk"

function extrairLinks (arrLinks){
    return arrLinks.map((objectLink) => Object.values(objectLink).join())
}
// join - pega o conteudo de um array e converte para uma string

async function checaStatus(ListaURLs){
    const arrStatus = await Promise.all(
        ListaURLs.map(async (url) =>{
            try{
                const resposta = await fetch (url)
                return resposta.status
            }catch(erro){
                return moveError(erro)
            }
        })

    )
    return arrStatus
}

function moveError (erro){
    if (erro.cause.code === 'ENOTFOUND'){
        return 'LINK NÃO ENCONTRADO'
    }else{
        return 'OCORREU UM ERRO'
    }
}

export default async function listaValidada (listaDeLinks){
    const links = extrairLinks(listaDeLinks)
    const status = await checaStatus(links)

    return listaDeLinks.map((objeto, indice) =>({
        ...objeto, 
        status: status[indice]
    }))
    
}

// [gatinho salsicha](http://gatinhosalsicha.com.br/)
