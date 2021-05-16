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
        console.log(this.Nome, this.Matricula, this.IdCantina, this.Senha);
        var db = OpenConnection();
        db.transaction(this.SaveUser);
    }

    SaveUser(tx)
    {
        console.log(this.Nome, this.Matricula, this.IdCantina, this.Senha);
        var Nome = this.Nome;
        var Matricula = this.Matricula;
        var IdCantina = this.IdCantina;
        var Senha = this.Senha;
        var Termo = this.Termo;
        tx.executeSql('CREATE TABLE IF NOT EXISTS User(Nome, Matricula, IdCantina, Senha, Email, Termo)');
        tx.executeSql('INSERT INTO User (Nome, Matricula, IdCantina, Senha, Email, Termo)' +
        ' values(' + Nome +', ' + Matricula +', ' + IdCantina + ', ' + Senha + ', '
         + Email + ', ' + Termo + ')');
        tx.executeSql('SELECT * FROM User', [], function (tx, results) {
            console.log(results);
        });
    }
}

