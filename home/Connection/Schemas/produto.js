import { OpenConnection } from "../connection.js";


export default class Produto 
{
    IdProduto = null;
    NomeProduto = null;
    DescricaoProduto = null;
    Categoria;

    SaveProduto()
    {
        var db = OpenConnection();
        var idProd = 0;
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Produto', [], function(tx, results)
            {
                idProd = results.rows.length + 1;
            })
        });
        var nomeProduto = this.NomeProduto;
        var descProduto = this.DescricaoProduto;
        var categoria = this.Categoria;
        db.transaction(function(tx)
        {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Produto(idProduto unique, nomeProduto TEXT,' +
                ' descricaoProduto TEXT, categoria TEXT)');
            tx.executeSql('INSERT INTO Produto(idProduto, nomeProduto, descricaoProduto, categoria) '+
            'values(?,?,?,?)', [idProd, nomeProduto, descProduto, categoria]);
        });
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