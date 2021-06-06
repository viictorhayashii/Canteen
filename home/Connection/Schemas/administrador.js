import { OpenConnection } from "../connection.js";

export default class Administrador
{
    salvarAdministrador(nome,senha,idAdministrador,idCanteen)
    {
        var nomeAdm = nome;
        var senhaAdm = senha;
        var idAdm = idAdministrador;
        var idCantina = idCanteen;

        var db = OpenConnection();
        db.transaction(function(tx)
        {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Administrador(nomeAdm,senhaAdm,idAdm,idCantina)');
            tx.executeSql('INSERT INTO Administrador(nomeAdm,senhaAdm,idAdm,idCantina)' +
            'values(?,?,?,?)', [nomeAdm, senhaAdm, idAdm, idCantina]);
        });
    }
    consultarAdministrador(){
        var db = OpenConnection();
        var row = [];
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Administrador', [], function (tx, resultado) {
                var len = resultado.rows.length;
                for (var i=0; i<len; i++){
                     row[i]= resultado.rows.item(i);
                }                
            });
        });
        return row;
    }

}