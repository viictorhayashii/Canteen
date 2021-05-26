import Usuario from "../../Connection/Schemas/usuario.js";

const cadastrarAluno  = () =>{
    var user = new Usuario();
    user.Nome = document.getElementById('nome-usuario').value;
    user.Matricula = document.getElementById('matricula-usuario').value;
    user.IdCantina = document.getElementById('cantina-usuario').value;
    user.Senha = document.getElementById('senha-usuario').value;
    user.Email = document.getElementById('email-usuario').value;
    user.Termo = document.getElementById('checkbox-termo').checked;
    const senhaConfirma = document.getElementById('senhaConfirma-usuario').value;

    if(validarFormulario(user, senhaConfirma) && validarCampos(user, senhaConfirma))
    {
        console.log(user);
        user.SaveUser();
    }
}

 function validarFormulario(user, senhaConfirma){
    if(user.Nome.length === 0 && user.Matricula.length === 0 && user.IdCantina.length === 0 &&
         user.Senha.length === 0 && senhaConfirma.length === 0 && user.Email.length === 0)
    {
            alert("Preencha todos os campos");
            return false;
    }
    if(user.Termo.checked === false)
    {
        alert("Aceite nossos Termos" );
        return false;
    }
    return true;
 }

function validarCampos(user,senhaConfirma){
    if(user.Senha !== senhaConfirma){
        alert("senhas nao Correspondem");
        return false;
    }
    if(user.Email.indexOf('@')==-1 || user.Email.indexOf('.')==-1){
        alert('Por favor, informe um email válido!');
        return false;
    }
    return true;
}

const cadastroAluno = document.querySelector('[data-form-button]');
console.log(cadastroAluno);
cadastroAluno.addEventListener('click', cadastrarAluno);