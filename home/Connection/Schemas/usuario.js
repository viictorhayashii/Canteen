import { OpenConnection } from "../connection.js";

export default class Usuario
{
    Nome = null;
    Matricula = null;
    IdCantina = null;
    Senha = null;
    Email = null;
    Termo = false;

    TrySaveUser()
    {
        var db = OpenConnection();
        db.transaction(this.SaveUser);
        console.log(this.Nome, this.Matricula);
    }

    getUser()
    {
        return this;
    }

    SaveUser(tx)
    {
        var user = this.getUser();
        console.log(user)
        var Nome = this.Nome;
        var Matricula = this.Matricula;
        var IdCantina = this.IdCantina;
        var Senha = this.Senha;
        var Email = this.Email;
        var Termo = this.Termo;

        tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(nome,matricula unique,idCantina,senha,email,termo)');
        tx.executeSql('INSERT INTO Usuario(nome,matricula,idCantina,senha,email,termo) VALUES ("'+
        Nome+'","'+Matricula+'","'+IdCantina+'","'+Senha+'","'+Email+'","'+Termo+'")');

        tx.executeSql('SELECT * FROM Usuario', [], function (tx, results) {
            console.log(results);
        });
    }
}

