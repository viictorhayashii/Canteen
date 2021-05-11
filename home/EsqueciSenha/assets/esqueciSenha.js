const validarUsuario  = () =>{
    vm = this;
    vm.login = false;

    const nome = document.getElementById('nome-esqueci').value;
    const email = document.getElementById('email-esqueci').value;
    const matricula = document.getElementById('matricula-esqueci').value;
    const mensagem = document.querySelector('.esqueci-senha');
    console.log([nome,email,matricula]);
    
    mensagem.setAttribute('style', 'display: flex');
    
}

const validarLogin = document.querySelector('[data-form-button]');
validarLogin.addEventListener('click', validarUsuario);