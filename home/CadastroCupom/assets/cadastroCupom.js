var validaForm = false;
var cupons = [];
const cadastrarProduto  = () =>{
    
    const tituloProduto = document.getElementById('tituloProduto').value;
    const descricaoCupom = document.getElementById('descricaoCupom').value;
    const categorias = document.getElementById('categorias').value;
    const descontoCupom = document.getElementById('descontoCupom').value;

    validarFormulario(tituloProduto,descricaoCupom,categorias,descontoCupom);

    if(validaForm === true){
        cupons = [tituloProduto,descricaoCupom,categorias,descontoCupom];
        console.log(produtos);
        limparCampos();
    }
}

let input = SimpleMaskMoney.setMask('#descontoCupom',{
    prefix: 'R$',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    emptyOrInvalid: () => {
      return this.SimpleMaskMoney.args.fixed
        ? `0${this.SimpleMaskMoney.args.decimalSeparator}00`
        : `_${this.SimpleMaskMoney.args.decimalSeparator}__`;
    }
});

function limparCampos(){
    tituloProduto = document.getElementById('tituloProduto').value = '';
    descCupom = document.getElementById('descricaoCupom').value = '';
    categorias = document.getElementById('categorias').value = '';
    codCadastro = document.getElementById('descontoCupom').value = '';
}

function validarFormulario(tituloProduto,descCupom,categorias,codCadastro){
    if(tituloProduto.length === 0 || descCupom.length === 0 || categorias.length === 0 || codCadastro.length === 0){
        return alert("Preencha todos os campos") , validaForm = false;
    }else{
        return alert("Cadastrado com sucesso"), validaForm = true;
    }
}

const cadastroProduto = document.querySelector('[data-form-button]');
cadastroProduto.addEventListener('click', cadastrarProduto);