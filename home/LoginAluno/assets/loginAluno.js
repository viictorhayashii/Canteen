import Usuario from "../../Connection/Schemas/usuario.js";

var usuario = new  Usuario;
var listaUsuario = {};
listaUsuario = usuario.consultarUsuario();

const validarUsuario  = () =>{
    const usuario = document.getElementById('usuario-login').value;
    const senha = document.getElementById('senha-login').value;
    const error = document.querySelector('.error-login');
    
    for(var i = 0; i < listaUsuario.length; i++){
        var usuarioValidado = listaUsuario[i].email;
        var senhaValidada = listaUsuario[i].senha;
        var validado = false;
       if(usuario == usuarioValidado && senha == senhaValidada){
            window.location.href = "../Principal/Principal.html";
            validado = true; 
       }
    }
    if(validado === false){
        error.setAttribute('style', 'display: flex');
    }
}
const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);