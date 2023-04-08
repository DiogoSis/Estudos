export class Negociacoes {
    constructor() {
        this.negiciacoes = [];
    }
    //criando uma porta de entrada para o metodo que está privado
    adiciona(negociacao) {
        this.negiciacoes.push(negociacao);
    }
    lista() {
        return this.negiciacoes;
    }
}
