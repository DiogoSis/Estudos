import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negiciacoes: Array<Negociacao> =[];

    //criando uma porta de entrada para o metodo que está privado
    adiciona (negociacao: Negociacao) {
        this.negiciacoes.push(negociacao);
    }
    lista(): ReadonlyArray<Negociacao>{
        return this.negiciacoes;
    }
}
