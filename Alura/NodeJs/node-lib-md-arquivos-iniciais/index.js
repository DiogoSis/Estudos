import fs from 'fs';
import chalk from 'chalk';


        // importando a biblioteca fs - file sistem
        // variaveis com nomes em ingles para treinar as nomenclaturas de variaveis

function handleError (erro){
            // throw - jogar || lançar algo 
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretorio'))
}

function getFile(filePath){
    const encoding = 'utf-8'
    fs.promisses.readFile(filePath, encoding)
        // then função para encadear codigos assincronos
        .then((texto) => console.log(chalk.green(texto)))
        //cath função para pegar codigos assincronos
        .cath(handleError)
}

// function getFile (filePath){
//     const encoding = 'utf-8'
//     fs.readFile(filePath, encoding, (erro, texto) => {
//         if (erro){
//             handleError(erro) // tratativa para casos de erro
//         }
//         console.log(chalk.green(texto))
//     })
// }

getFile('./arquivos/texto.md')