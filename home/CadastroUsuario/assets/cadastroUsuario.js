import Usuario from "../../Connection/Schemas/usuario.js";
import Administrador from "../../Connection/Schemas/administrador.js"

var adm = new Administrador();
var listaAdm =[];
listaAdm = adm.consultarAdministrador();

const cadastrarAluno  = () =>{
    var user = new Usuario();
    user.Nome = document.getElementById('nome-usuario').value;
    user.Matricula = document.getElementById('matricula-usuario').value;
    user.IdCantina = document.getElementById('cantina-usuario').value;
    user.Senha = document.getElementById('senha-usuario').value;
    user.Email = document.getElementById('email-usuario').value;
    user.Termo = document.getElementById('checkbox-termo').checked;
    const senhaConfirma = document.getElementById('senhaConfirma-usuario').value;

    if(validarFormulario(user, senhaConfirma) && validarCampos(user, senhaConfirma) && validarCantina(user))
    {
        user.salvarUsuario();
        alert("Cadastrado com sucesso");
        limparCampos();
    }
}

 function validarFormulario(user, senhaConfirma){
    if(user.Nome.length === 0 && user.Matricula.length === 0 && user.IdCantina.length === 0 &&
         user.Senha.length === 0 && senhaConfirma.length === 0 && user.Email.length === 0)
    {
        alert("Preencha todos os campos");
        return false;
    }
    if(user.Termo === false)
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
var validaCantina = false;
function validarCantina(user){
    for(var i = 0; i < listaAdm.length; i++){
        if(listaAdm[i].idCantina === user.IdCantina){
            return validaCantina = true;
        }
    }
    if(validaCantina === false){
        alert("Cantina não existente");
    }
}
function limparCampos(){
    document.getElementById('nome-usuario').value = '';
    document.getElementById('matricula-usuario').value = '';
    document.getElementById('cantina-usuario').value = '';
    document.getElementById('senha-usuario').value = '';
    document.getElementById('email-usuario').value = '';
    document.getElementById('checkbox-termo').checked = false;
    document.getElementById('senhaConfirma-usuario').value = '';
    document.getElementById('emailConfirma-usuario').value = '';
}

const cadastroAluno = document.querySelector('[data-form-button]');
cadastroAluno.addEventListener('click', cadastrarAluno);