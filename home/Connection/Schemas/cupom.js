import { OpenConnection } from "../connection.js";

export default class Cupom
{
    NomeCupom = null;
    DescricaoCupom = null;
    Categoria = null;
    DescontoCupom = null;
    IdCupom = 0;

    salvarCupom(){
        var db = OpenConnection();
        var nomeCupom = this.NomeCupom;
        var descricaoCupom = this.DescricaoCupom;
        var categoria = this.Categoria;
        var descontoCupom = this.DescontoCupom;
        var idCupom = this.IdCupom;

        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Cupom', [], function(tx, results)
            {
                idCupom = results.rows.length + 1;
            })
        });
        db.transaction(function(tx)
        {
            //tx.executeSql('DROP TABLE IF EXISTS Cupom');
            tx.executeSql('CREATE TABLE IF NOT EXISTS Cupom(nomeCupom TEXT,descricaoCupom TEXT,categoria TEXT,descontoCupom TEXT,idCupom TEXT)');
            tx.executeSql('INSERT INTO Cupom(nomeCupom,descricaoCupom,categoria,descontoCupom,idCupom)' +
            'values(?,?,?,?,?)', [nomeCupom, descricaoCupom, categoria, descontoCupom, idCupom]);
        });
    }
    consultarCupom(){
        var db = OpenConnection();
        var row = [];
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Cupom', [], function (tx, resultado) {
                var len = resultado.rows.length;
                for (var i=0; i<len; i++){
                     row[i]= resultado.rows.item(i);
                }                
            });
        });
        console.log(row);
        return row;
    }

    deleteCupom(nomeCupom)
    {
        var db = OpenConnection();
        db.transaction(function (tx){
            tx.executeSql('DELETE FROM Cupom WHERE nomeCupom = ?', [nomeCupom]);
            {
                alert("Cupom Excluido Com Sucesso");
            }

        });
    }

}