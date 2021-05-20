import { OpenConnection } from "../connection.js";

export default class Usuario
{
    Nome = null;
    Matricula = null;
    IdCantina = null;
    Senha = null;
    Email = null;
    Termo = false;

    SaveUser()
    {
        var Nome = this.Nome;
        var Matricula = this.Matricula;
        var IdCantina = this.IdCantina;
        var Senha = this.Senha;
        var Email = this.Email;
        var Termo = this.Termo;
        var db = OpenConnection();
        db.transaction(function(tx)
        {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(nome,matricula unique,idCantina,senha,email,termo)');
            tx.executeSql('INSERT INTO Usuario(nome,matricula,idCantina,senha,email,termo)' +
            'values(?,?,?,?,?,?)', [Nome, Matricula, IdCantina, Senha, Email, Termo]);
        });
    }
}

