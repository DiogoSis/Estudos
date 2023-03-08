import chalk from "chalk";
import getFile from "./index.js";
import fs from "fs";
import listaValidada from "./http-validacao.js";

const path = process.argv; // objeto NODE (argv - valores de argumento)

async function printList(validity, resultado, identificador = "") {
  if (validity) {
    console.log(
      chalk.red("lista de links"),
      chalk.black.bgGreen(identificador),
      await listaValidada(resultado)
    );
  } else {
    console.log(
      chalk.red("lista de links"),
      chalk.black.bgGreen(identificador),
      resultado
    );
  }
}

async function processText(argumentos) {
  const path = argumentos[2];
  const validity = argumentos[3] === '--valida';

  try {
    fs.lstatSync(path);
  } catch (erro) {
    if (erro.code === "ENOENT") {
      //criando uma condição onde o erro dentro do codigo fique mais especificado
      console.log("arquivo ou diretório não existe");
      return;
    }
  }

  if (fs.lstatSync(path).isFile()) {
    //isFile é um metodo que retorna tree ou false
    const resultado = await getFile(argumentos[2]);
    printList(validity, resultado)
    // console.log(chalk.gray("lista de links"), resultado);
  } else if (fs.lstatSync(path).isDirectory()) {
    // usando o mesmo metodo para quando for verdadeiro ele retornar um diretorio
    const arquivos = await fs.promises.readdir(path);
    arquivos.forEach(async (nomeDeArquivo) => {
      const list = await getFile(`${path}/${nomeDeArquivo}`);
      printList(validity, list, nomeDeArquivo);
    });
  }
}

processText(path);
// getFile(path[2])
