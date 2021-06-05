import produto from "../../Connection/Schemas/produto.js";
import administrador from "../../Connection/Schemas/administrador.js";

var prod = new produto();
var adm = new administrador();
var listaProduto = [];
var listaAdm = [];
var produtoOk = false;
var userOk = false;

listaAdm = adm.consultarAdministrador();
listaProduto = prod.consultarProdutos();

const validarUsuario = () =>{
    const tituloProduto = document.getElementById('tituloProduto').value;
    const categorias = document.getElementById('categorias').value;
    const putPass = document.getElementById('putPass').value;
    const confirmPass = document.getElementById('confirmPass').value;

    for(var i = 0; i < listaProduto.length; i++){
        if(listaProduto[i].nomeProduto === tituloProduto && listaProduto[i].categoria === categorias){
            produtoOk = true;
        }
    }
    if(produtoOk === false){
        alert("Produto não Encontrado");
        return;
    }
    for(var i = 0; i < listaAdm.length; i++){
        if(listaAdm[i].senhaAdm === putPass && listaAdm[i].senhaAdm === confirmPass){
            userOk = true;
        }
    }
    if(userOk === false){
        alert("Senha incorreta");
        return;
    }

    if(produtoOk && userOk){
        prod.deleteProduto(tituloProduto);
        prod.consultarProdutos();
    }



    
}

const botaoExcluir = document.querySelector('[data-form-button]');
botaoExcluir.addEventListener('click', validarUsuario);
