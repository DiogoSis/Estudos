import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    //ingle page application, que é uma página que não recarrega durante o seu uso, eu preciso cancelar o evento padrão do formulário que é submissão, vou fazer: event.preventDefault();
    event.preventDefault();
    controller.adiciona();
});
