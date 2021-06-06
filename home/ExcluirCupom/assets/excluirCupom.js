import Cupom from "../../Connection/Schemas/cupom.js"
import Administrador from "../../Connection/Schemas/administrador.js"
var cupom = new Cupom();
var adm = new Administrador();
var listaCupom = [];
var listaAdm = [];
var userOk = false;
var cupomOk = false

listaCupom = cupom.consultarCupom();
listaAdm = adm.consultarAdministrador();


const excluirProduto = () =>{
    const tituloCupom = document.getElementById('tituloCupom').value;
    const categorias = document.getElementById('categorias').value;
    const senha = document.getElementById('putPass').value;
    const senhaConfirma = document.getElementById('confirmPass').value;
    

    for(var i = 0; i < listaCupom.length; i++){
        if(listaCupom[i].nomeCupom === tituloCupom && listaCupom[i].categoria === categorias){
            cupomOk = true;
        }
    }
    if(cupomOk === false){
        alert("Cupom não encontrado");
    }

    for(var i = 0; i < listaAdm.length; i++){
        if(listaAdm[i].senhaAdm === senha && listaAdm[i].senhaAdm === senhaConfirma){
            userOk = true;
        }
    }
    if(userOk === false){
        alert("Senha incorreta");
    }

    if(userOk && cupomOk){
        cupom.deleteCupom(tituloCupom);
    }else{}


}


const botaoExcluir = document.querySelector('[data-form-button]');
botaoExcluir.addEventListener('click', excluirProduto);
