import Usuario from "../../Connection/Schemas/usuario.js";

var usuario = new  Usuario;
var listaUsuario = {};
listaUsuario = usuario.consultarUsuario();

const validarUsuario  = () =>{
  
    const nome = document.getElementById('nome-esqueci').value;
    const email = document.getElementById('email-esqueci').value;
    const matricula = document.getElementById('matricula-esqueci').value;
    const mensagem = document.querySelector('.esqueci-senha');
    const error = document.querySelector('.error');
    
    for(var i = 0; i < listaUsuario.length; i++){
        var nomeValidado = listaUsuario[i].nome;
        var emailValidada = listaUsuario[i].email;
        var matriculaValidada = listaUsuario[i].matricula;
        var validado = false;
       if(nome == nomeValidado && email == emailValidada && matricula == matriculaValidada ){
            mensagem.setAttribute('style', 'display: flex');
            validado = true;
       }
    }
    if(validado === false){
        error.setAttribute('style', 'display: flex');
    }



    
   
    
}

const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);