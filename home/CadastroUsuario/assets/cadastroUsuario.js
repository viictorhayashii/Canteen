var validaForm = false;
var alunos = [];
const cadastrarAluno  = () =>{
    
    const nome = document.getElementById('nome-usuario').value;
    const matricula = document.getElementById('matricula-usuario').value;
    const idCantina = document.getElementById('cantina-usuario').value;
    const senha = document.getElementById('senha-usuario').value;
    const senhaConfirma = document.getElementById('senhaConfirma-usuario').value;
    const email = document.getElementById('email-usuario').value;
    const emailConfirma = document.getElementById('emailConfirma-usuario').value;
    const termo = document.getElementById('checkbox-termo');

    validarFormulario(nome,matricula,idCantina,senha,senhaConfirma,email,emailConfirma,termo);
    validarCampos(senha,senhaConfirma,email,emailConfirma);

    if(validaForm === true){
        alunos = [nome,matricula,idCantina,senha,senhaConfirma,email,emailConfirma,termo];
        console.log(alunos);
        
    }

}

 function validarFormulario(nome,matricula,idCantina,senha,senhaConfirma,email,emailConfirma,termo){
    if(nome.length === 0 || matricula.length === 0 ||idCantina.length === 0 || senha.length === 0 || senhaConfirma.length === 0 ||
        email.length === 0 || emailConfirma.length === 0){
            return alert("Preencha todos os campos") , validaForm = false;
    }else if(termo.checked === false){
        return alert("Aceite nossos Termos" ), validaForm = false;
    }else{
        return validaForm = true;
    }
    
 }

function validarCampos(senha,senhaConfirma,email,emailConfirma){
    if(senha !== senhaConfirma){
        return alert("senhas nao Correspondem"), validaForm = false;
    }else if(email !== emailConfirma){
        return alert('emails nao Correspondem'), validaForm = false;
    }else if(email.indexOf('@')==-1 || email.indexOf('.')==-1  || emailConfirma.indexOf('@')==-1 || emailConfirma.indexOf('.')==-1){
        return alert('Por favor, informe um email válido!'), validaForm = false;
    }else{
        return validaForm = true;
    }
    
}

const cadastroAluno = document.querySelector('[data-form-button]');
cadastroAluno.addEventListener('click', cadastrarAluno);