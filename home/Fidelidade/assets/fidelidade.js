import Cupom from "../../Connection/Schemas/cupom.js";

var cupom = new Cupom();
var listaCupom = [];
var valorAcumulado = 0;


listaCupom = cupom.consultarCupom();


const listaProdutos = () => {
    for (var i = 0; i < listaCupom.length; i++) {

        var nome = listaCupom[i].nomeCupom;
        var valorCupom = listaCupom[i].descontoCupom / 2;
        valorAcumulado = valorAcumulado + valorCupom;

        const lista = document.querySelector('[data-list]');
        const tarefa = document.createElement('li');
        tarefa.classList.add('linhaLista')
        const conteudo = `<p class="content">${nome}</p><p class="content2">ID:${valorCupom}</p>`;
        tarefa.innerHTML = conteudo;
        lista.appendChild(tarefa);

        const barraProgresso = document.querySelector('[data-progress]');
        const textoProgress = document.getElementById('texto-progress');
        textoProgress.textContent = valorAcumulado + "PTS";
        barraProgresso.setAttribute('style', `width: ${valorAcumulado}px;background-color: #04DF97;`);
    }

}

window.onload = listaProdutos;
var $range = document.querySelector('input'),
    $value = document.querySelector('span');

$range.addEventListener('input', function() {
    $value.textContent = this.value;
});