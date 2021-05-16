import { OpenConnection } from "../connection";

var CategoriaProduto = {
    Salgados : 1,
    Bebidas : 2,
    Sobremesas : 3
}

export default class Produto 
{
    IdProduto = null;
    NomeProduto = null;
    DescricaoProduto = null;
    Categoria = CategoriaProduto.Salgados;

    TrySaveProduto()
    {
        var db = OpenConnection();
        db.transaction(this.SaveProduto);
    }

    SaveProduto(tx)
    {
        tx.executeSql("CREATE TABLE IF NOT EXIST Produto(IdProduto, NomeProduto, DescricaoProduto," +
        "Categoria");
        tx.executeSql("INSERT INTO Produto(IdProduto, NomeProduto, DescricaoProduto, Categoria) "+
        "values(" + this.IdProduto +", " + this.NomeProduto + ", " + this.DescricaoProduto + 
        ", " + this.Categoria + ")");
    }

    GetProdutoByName(NomeProduto)
    {
        var db = OpenConnection();
        db.transaction(function (){
            tx.executeSql("SELECT * FROM Produto WHERE NomeProduto = " + NomeProduto + "", [], function (tx, results){
                this.IdProduto = results.IdProduto;
                this.NomeProduto = results.NomeProduto;
                this.DescricaoProduto = results.DescricaoProduto;
                this.Categoria = results.Categoria;
                return this;
            })
        });
    }
}