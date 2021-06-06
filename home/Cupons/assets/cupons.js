
import Cupom from "../../Connection/Schemas/cupom.js";

var cupom = new Cupom();
var listaCupom = [];

listaCupom = cupom.consultarCupom();
console.log(listaCupom);

const listaProdutos = () =>{
    for (var i = 0; i < listaCupom.length; i++) {

        var nome = listaCupom[i].nomeCupom;
        var desconto = listaCupom[i].descontoCupom;
        var descricaoCupom = listaCupom[i].descricaoCupom;
        var idCupom = listaCupom[i].idCupom;

        const lista = document.querySelector('[data-list]');
        const tarefa = document.createElement('li');
        tarefa.classList.add('linhaLista')
        const conteudo = `<p class="content">${nome}</p><p class="content2">ID:${idCupom}</p> </br>
        <p class="content3">${descricaoCupom}</p><p class="content4">${desconto}%</p>`;
        tarefa.innerHTML = conteudo;
        lista.appendChild(tarefa);
    }
       
}

window.onload = listaProdutos;
