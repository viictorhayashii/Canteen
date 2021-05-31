import { OpenConnection } from "../connection.js";

export default class Usuario
{
    Nome = null;
    Matricula = null;
    IdCantina = null;
    Senha = null;
    Email = null;
    Termo = false;
    Lista = [];

    salvarUsuario()
    {
        var Nome = this.Nome;
        var Matricula = this.Matricula;
        var IdCantina = this.IdCantina;
        var Senha = this.Senha;
        var Email = this.Email;
        var Termo = this.Termo;
        var Lista = this.Lista;
        var db = OpenConnection();
        db.transaction(function(tx)
        {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(nome,matricula unique,idCantina,senha,email,termo)');
            tx.executeSql('INSERT INTO Usuario(nome,matricula,idCantina,senha,email,termo)' +
            'values(?,?,?,?,?,?)', [Nome, Matricula, IdCantina, Senha, Email, Termo]);
        });
    }
    consultarUsuario(){
        var db = OpenConnection();
        var row = [];
        db.transaction(function(tx) {
            tx.executeSql('SELECT * FROM Usuario', [], function (tx, resultado) {
                var len = resultado.rows.length;
                for (var i=0; i<len; i++){
                     row[i]= resultado.rows.item(i);
                }                
            });
        });
        return row;
    }



}

