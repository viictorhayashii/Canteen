import Produto from "../../Connection/Schemas/produto.js";

const cadastrarProduto  = () =>{

    var prod = new Produto();
    prod.NomeProduto = document.getElementById('tituloProduto').value;
    prod.DescricaoProduto = document.getElementById('descProduto').value;
    prod.Categoria = document.getElementById('categorias').value;

    if(validarFormulario(prod)){
        prod.SaveProduto();
        limparCampos();
    }
}

function limparCampos(){
    document.getElementById('tituloProduto').value = '';
    document.getElementById('descProduto').value = '';
    document.getElementById('categorias').value = '';
}

function validarFormulario(produto){
    if(produto.NomeProduto.length == 0 || produto.DescricaoProduto.length == 0 ||
         produto.Categoria.length == 0)
    {
        alert("Preencha todos os campos")
        return false;
    }
    return true;
}

function AddProductImage()
{
    var img = new Image();
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document.getElementById('product-img').appendChild(img);
}

const cadastroProduto = document.querySelector('[data-form-button2]');
cadastroProduto.addEventListener('click', cadastrarProduto);
const addProductImage = document.querySelector('[data-form-button]');
addProductImage.addEventListener('click', AddProductImage);