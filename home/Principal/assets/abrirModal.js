import Adminstrador from "../../Connection/Schemas/administrador.js";

var adm = new Adminstrador();
var listaAdm = [];
listaAdm = adm.consultarAdministrador();

const autenticarUsuario = () => {

    const email = document.querySelector('[data-form-button1]').value;
    const senha = document.querySelector('[data-form-button2]').value;
    var validado = false;
    for (var i = 0; i < listaAdm.length; i++) {
        var email1 = listaAdm[i].nomeAdm;
        var senha1 = listaAdm[i].senhaAdm;

        if (email1 === email && senha1 === senha) {
            window.location.href = "../Administrador/Administrador.html";

        }
    }
}

const abrirModal = () => {
    $(document).ready(function() {
        $('#loginModal').modal('show');
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });

}
const botaoEditar = document.querySelector('[data-form-button]');
const botaoLoginAdm = document.querySelector('[data-form-button3]');
botaoEditar.addEventListener('click', abrirModal);
botaoLoginAdm.addEventListener('click', autenticarUsuario);