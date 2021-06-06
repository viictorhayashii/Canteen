
import produto from "../../Connection/Schemas/produto.js";

var prod = new produto();
var listaProduto = [];

listaProduto = prod.consultarProdutosPorCategoria("Bebidas");

const listaProdutos = () =>{
    for (var i = 0; i < listaProduto.length; i++) {

        var nome = listaProduto[i].nomeProduto;
        var preco = listaProduto[i].precoProduto;
        var valorFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const lista = document.querySelector('[data-list]');
        const tarefa = document.createElement('li');
        tarefa.classList.add('linhaLista')
        const conteudo = `<p class="content">${nome}</p>
        <p class="content2">R$ ${valorFormatado}</p>`;
        tarefa.innerHTML = conteudo;
        lista.appendChild(tarefa);
    }
       
}

window.onload = listaProdutos;

