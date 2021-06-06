import Produto from "../../Connection/Schemas/produto.js";

const cadastrarProduto  = () =>{

    var prod = new Produto();
    prod.NomeProduto = document.getElementById('tituloProduto').value;
    prod.DescricaoProduto = document.getElementById('descProduto').value;
    prod.Categoria = document.getElementById('categorias').value;
    prod.PrecoProduto = document.getElementById('precoProduto').value;

    if(validarFormulario(prod)){
        prod.SaveProduto();
        limparCampos();
    }
}

function limparCampos(){
    document.getElementById('tituloProduto').value = '';
     document.getElementById('descProduto').value = '';
    document.getElementById('categorias').value = '';
    document.getElementById('precoProduto').value = '';
}

function validarFormulario(produto){
    if(produto.NomeProduto.length == 0 || produto.DescricaoProduto.length == 0 ||
         produto.Categoria.length == 0 || produto.PrecoProduto.length == 0)
    {
        alert("Preencha todos os campos")
        return false;
    }
    return true;
}

// function AddProductImage()
// {
//     if (this.files && this.files[0]) {
//         var file = new FileReader();
//         file.onload = function(e) {
//             document.getElementById("preview").src = e.target.result;
//         };       
//         file.readAsDataURL(this.files[0]);
//     }
// }

const cadastroProduto = document.querySelector('[data-form-button2]');
cadastroProduto.addEventListener('click', cadastrarProduto);
// const addProductImage = document.querySelector('[data-form-button]');
// addProductImage.addEventListener('click', AddProductImage);
// document.getElementById("img-input").addEventListener("change", AddProductImage, false);