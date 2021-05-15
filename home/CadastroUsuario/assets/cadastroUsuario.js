import Usuario from "../../Connection/Schemas/usuario";

const cadastrarAluno  = () =>{
    let user = new Usuario({
        Nome = document.getElementById('nome-usuario').value,
        Matricula = document.getElementById('matricula-usuario').value,
        IdCantina = document.getElementById('cantina-usuario').value,
        Senha = document.getElementById('senha-usuario').value,
        Email = document.getElementById('email-usuario').value,
        Termo = document.getElementById('checkbox-termo').checked
    });
    const senhaConfirma = document.getElementById('senhaConfirma-usuario').value;

    if(validarFormulario(user, senhaConfirma) && validarCampos(user, senhaConfirma))
    {
       user.TrySaveUser();
    }
}

 function validarFormulario(user, senhaConfirma){
    if(user.nome.length === 0 && user.matricula.length === 0 && user.idCantina.length === 0 &&
         user.senha.length === 0 && senhaConfirma.length === 0 && user.email.length === 0)
    {
            alert("Preencha todos os campos");
            return false;
    }
    if(user.termo.checked === false)
    {
        alert("Aceite nossos Termos" );
        return false;
    }
    return true;
 }

function validarCampos(user,senhaConfirma){
    if(user.senha !== senhaConfirma){
        alert("senhas nao Correspondem");
        return false;
    }
    if(user.email.indexOf('@')==-1 || user.email.indexOf('.')==-1){
        alert('Por favor, informe um email válido!');
        return false;
    }
    return true;
}

const cadastroAluno = document.querySelector('[data-form-button]');
console.log(cadastroAluno);
cadastroAluno.addEventListener('click', cadastrarAluno);