import Cupom from "../../Connection/Schemas/cupom.js"
var cumpom = new Cupom();
var listaCupom = [];

listaCupom = cumpom.consultarCupom();

const excluirProduto = () =>{
    const tituloCupom = document.getElementById('tituloCupom').value;
    const categorias = document.getElementById('categorias').value;

    for(var i = 0; i < listaCupom.length; i++){
        if(listaCupom[i].nomeCupom === tituloCupom && listaCupom[i].categoria === categorias){
           cumpom.deleteCupom(tituloCupom);
        }
    }

}


const botaoExcluir = document.querySelector('[data-form-button]');
botaoExcluir.addEventListener('click', excluirProduto);
