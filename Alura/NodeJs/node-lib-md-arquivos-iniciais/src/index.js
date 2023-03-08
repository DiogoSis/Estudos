import fs from "fs";
import chalk from "chalk";


// importando a biblioteca fs - file sistem
// variaveis com nomes em ingles para treinar as nomenclaturas de variaveis

function extractorLink(texto){
        const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
        const capturas = [...texto.matchAll(regex)]
        const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
        return resultados.length !== 0 ? resultados : 'não há links no arquivo'
}

function handleError(erro) {
  // throw - jogar || lançar algo
  throw new Error(chalk.red(erro.code, "Não há arquivo no diretorio"));
}

// async/await

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(filePath, encoding);
    return extractorLink(chalk.green(texto));
  } catch (erro) {
    handleError(erro);
  }
}
export default getFile

// promisses com then()

// function getFile(filePath){
//     const encoding = 'utf-8'
//     fs.promisses.readFile(filePath, encoding)
//         // then função para encadear codigos assincronos
//         .then((texto) => console.log(chalk.green(texto)))
//         //cath função para pegar codigos assincronos
//         .cath(handleError)
// }

// function getFile (filePath){
//     const encoding = 'utf-8'
//     fs.readFile(filePath, encoding, (erro, texto) => {
//         if (erro){
//             handleError(erro) // tratativa para casos de erro
//         }
//         console.log(chalk.green(texto))
//     })
// }

// getFile("./arquivos/texto.md");
// getFile("./arquivos/");


// expressoes Regulares

//  \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
