const validarUsuario  = () =>{
    vm = this;
    vm.login = false;

    const usuario = document.getElementById('usuario-login').value;
    const senha = document.getElementById('senha-login').value;
    const usuarioValidado = 'abc';
    const senhaValidada = '123';
    const error = document.querySelector('.error-login');

    if(usuario === usuarioValidado || senha === senhaValidada ){
        window.location.href = "../Principal/Principal.html";
    }else{
        error.setAttribute('style', 'display: flex');
    }
    
}

const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);