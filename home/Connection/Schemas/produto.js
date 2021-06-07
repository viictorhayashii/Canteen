import { OpenConnection } from "../connection.js";


export default class Produto {
    IdProduto = null;
    NomeProduto = null;
    DescricaoProduto = null;
    Categoria;
    PrecoProduto;

    SaveProduto() {
        var db = OpenConnection();
        var idProd = 0;
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Produto', [], function(tx, results) {
                idProd = results.rows.length + 1;
            })
        });
        var nomeProduto = this.NomeProduto;
        var descProduto = this.DescricaoProduto;
        var categoria = this.Categoria;
        var precoProduto = this.PrecoProduto;
        db.transaction(function(tx) {
            //tx.executeSql('DROP TABLE IF EXISTS Produto');
            tx.executeSql('CREATE TABLE IF NOT EXISTS Produto(idProduto unique, nomeProduto TEXT,' +
                'descricaoProduto TEXT, categoria TEXT, precoProduto TEXT)');
            tx.executeSql('INSERT INTO Produto(idProduto, nomeProduto, descricaoProduto, categoria, precoProduto) ' +
               'values(?,?,?,?,?)', [idProd, nomeProduto, descProduto, categoria, precoProduto]);
        });
    }

    deleteProduto(nomeProduto) {
        var db = OpenConnection();
        db.transaction(function(tx) {
            tx.executeSql('DELETE FROM Produto WHERE nomeProduto = ?', [nomeProduto]); {
                alert("Produto Excluido Com Sucesso");
            }

        });
    }
    consultarProdutosPorCategoria(categoria) {
        var db = OpenConnection();
        var row = [];
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Produto WHERE categoria = ?', [categoria], function(tx, resultado) {
                var len = resultado.rows.length;
                for (var i = 0; i < len; i++) {
                    row[i] = resultado.rows.item(i);
                }
            });
        });
        return row;
    }

    consultarProdutos() {
        var db = OpenConnection();
        var row = [];
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Produto', [], function(tx, resultado) {
                var len = resultado.rows.length;
                for (var i = 0; i < len; i++) {
                    row[i] = resultado.rows.item(i);
                }
            });
        });
        return row;
    }
}