import { OpenConnection } from "../connection.js";

export default class Usuario
{
    Nome;
    Matricula;
    IdCantina;
    Senha;
    Email;
    Termo = false;

    TrySaveUser()
    {
        var db = OpenConnection();
        db.transaction(this.SaveUser());
    }

    SaveUser(tx)
    {
        var Nome = this.Nome;
        var Matricula = this.Matricula;
        var IdCantina = this.IdCantina;
        var Senha = this.Senha;
        var Email = this.Email;
        var Termo = this.Termo;

        tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(Nome,Matricula,IdCantina,Senha,Email,Termo)');
        tx.executeSql('INSERT INTO Usuario (Nome,Matricula,IdCantina,Senha,Email,Termo) VALUES ("'+Nome+'","'+Matricula+'","'+IdCantina+'","'+Senha+'","'+Email+'","'+Termo+'")');

        // tx.executeSql('CREATE TABLE IF NOT EXISTS User(Nome, Matricula, IdCantina, Senha, Email, Termo)');
        // tx.executeSql('INSERT INTO User (Nome, Matricula, IdCantina, Senha, Email, Termo)' +
        // ' values(' + Nome +', ' + Matricula +', ' + IdCantina + ', ' + Senha + ', '
        //  + Email + ', ' + Termo + ')');
        tx.executeSql('SELECT * FROM Usuario', [], function (tx, results) {
            console.log(results);
        });
    }
}

