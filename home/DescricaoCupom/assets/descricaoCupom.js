import Produto from "../../Connection/Schemas/produto.js";

var produto = new Produto();
var listaProdutos = {};

listaProdutos = produto.consultarProdutos();
console.log(listaProdutos);


const descricao = document.getElementById('descricao');
const descricaoBanco = "X-salada Com Fritas"

const valor = document.getElementById('valor');
const valorBanco = "24,90";
valor.textContent = "R$ " + valorBanco;



descricao.textContent = descricaoBanco;