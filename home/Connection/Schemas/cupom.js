import Produto from "./produto";

var CategoriasEnum = {
    Salgados : 1,
    Bebidas : 2,
    Sobremesas : 3
};


export default class Cupom{

    IdCupom = null;
    Produto = new Produto();
    DescricaoCupom = null;
    DescontoCupom = null;

    constructor ()
    {
        this.IdCupom = Math.random() * 5;
    }

}