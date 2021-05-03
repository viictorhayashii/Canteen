const validarUsuario  = () =>{
    vm = this;
    vm.login = false;

    const usuario = document.getElementById('usuario-login').value;
    const senha = document.getElementById('senha-login').value;
    const usuarioValidado = 'abc';
    const senhaValidada = '123';

    if(usuario === usuarioValidado || senha === senhaValidada ){
        window.location.href = "../Principal/Principal.html";
    }else{
        
    }
    
}

const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);