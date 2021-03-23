const validarUsuario  = () =>{
    

    const usuario = document.getElementById('usuario-login').value;
    const senha = document.getElementById('senha-login').value;
    const usuarioValidado = 'abc';
    const senhaValidada = '123';

    if(usuario === usuarioValidado || senha === senhaValidada ){
        alert("Validado com sucesso");
        
    }else{
        alert("Dados Invalidos");
    }
    
}

const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);