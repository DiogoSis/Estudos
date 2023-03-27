const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

//teste de asserções, verificação se o valor é o esperado
const verifiqueSe = (valor) => {
    const assercoes ={
        ehExatamenteIgual(esperado){
            if(valor !== esperado){
                throw{}
            }
        }
    }
    return assercoes
}

const teste = (titulo, funcaoDeTeste) => {
  try{
    funcaoDeTeste();
    console.log(`${titulo} passou!`)
  }catch{
    console.log(`${titulo} não passou!`)
  }
};
teste('somaHorasExtras', () =>{
    const esperado = 2500
    const retornado = somaHorasExtras(2000, 500)

    verifiqueSe(retornado).ehExatamenteIgual(esperado)
});
teste('calculaDesconto', () =>{
    const esperado = 2200
    const retornado = calculaDescontos(2500, 300)

    verifiqueSe(retornado).ehExatamenteIgual(esperado)
});
