import Cupom from "../../Connection/Schemas/cupom.js";
import Produto from "../../Connection/Schemas/produto.js";
var validaForm = false;
var listaDeCupom = [];
var cupom = new Cupom();
const cadastrarProduto  = () =>{
    
    cupom.NomeCupom = document.getElementById('tituloProduto').value;
    cupom.DescricaoCupom = document.getElementById('descricaoCupom').value;
    cupom.Categoria = document.getElementById('categorias').value;
    cupom.DescontoCupom = document.getElementById('descontoCupom').value;

    validarFormulario(cupom);

    if(validaForm === true){
        cupom.salvarCupom();
        cupom.consultarCupom();
        limparCampos();
    }
}

function limparCampos(){
    document.getElementById('tituloProduto').value = '';
    document.getElementById('descricaoCupom').value = '';
    document.getElementById('categorias').value = '';
    document.getElementById('descontoCupom').value = '';
}

function validarFormulario(cupom){
    if(cupom.NomeCupom.length === 0 || cupom.DescontoCupom.length === 0 || cupom.Categoria.length === 0 || cupom.DescontoCupom.length === 0){
        return alert("Preencha todos os campos") , validaForm = false;
    }else{
        return alert("Cadastrado com sucesso"), validaForm = true;
    }
}
listaDeCupom = cupom.consultarCupom();

// var array = listaDeCupom.map(function(obj){

//     return Object.keys(obj).map(function(keys){
//         return obj[keys];
//     });
// });

// console.log(array);


$(function() {
  var prod = new Produto();
  var listadeProdutos = prod.consultarProdutos();
  $("#tituloProduto" ).autocomplete({
    source: listadeProdutos
  });
});

const cadastroProduto = document.querySelector('[data-form-button]');
cadastroProduto.addEventListener('click', cadastrarProduto);