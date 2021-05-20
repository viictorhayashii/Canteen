import Produto from "../../Connection/Schemas/produto.js";

var validaForm = false;
var produtos = [];
const cadastrarProduto  = () =>{
    
    const tituloProduto = document.getElementById('tituloProduto').value;
    const descProduto = document.getElementById('descProduto').value;
    const categorias = document.getElementById('categorias').value;
    const codCadastro = document.getElementById('codCadastro').value;

    var prod = new Produto();
    prod.NomeProduto = document.getElementById('tituloProduto').value;
    prod.DescricaoProduto = document.getElementById('descProduto').value;
    prod.Categoria = document.getElementById('categorias').value;
    validarFormulario(tituloProduto,descProduto,categorias,codCadastro);

    if(validaForm === true){
        
        prod.SaveProduto();
        limparCampos();
    }
}

function limparCampos(){
    tituloProduto = document.getElementById('tituloProduto').value = '';
    descProduto = document.getElementById('descProduto').value = '';
    categorias = document.getElementById('categorias').value = '';
    codCadastro = document.getElementById('codCadastro').value = '';
}

function validarFormulario(tituloProduto,descProduto,categorias,codCadastro){
    if(tituloProduto.length === 0 || descProduto.length === 0 || categorias.length === 0 || codCadastro.length === 0){
        return alert("Preencha todos os campos") , validaForm = false;
    }else{
        return alert("Cadastrado com sucesso"), validaForm = true;
    }
}

const cadastroProduto = document.querySelector('[data-form-button2]');
cadastroProduto.addEventListener('click', cadastrarProduto);