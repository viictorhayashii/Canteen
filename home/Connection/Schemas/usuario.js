
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
    }

    SaveUser(tx)
    {
        tx.executesql('CREATE TABLE IF NOT EXISTS User(Nome, Matricula, IdCantina, Senha, Email, Termo)');
        tx.executesql('INSERT INTO User (Nome, Matricula, IdCantina, Senha, Email, Termo)' +
        ' values(' + Nome +', ' + this.Matricula +', ' + this.IdCantina + ', ' + Senha + ', '
         + Email + ', ' + Termo + ')');
        tx.executesql('SELECT * FROM User', [], function (tx, results) {
            console.log(results);
        });
    }
}

