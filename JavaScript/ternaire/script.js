/* EXO - USER TERNAIRE
- créer un objet littéral contact avec les propriétés suivantes : name, password, isAdmin, age
- écrivez la fonction checkPassword() qui prend 2 paramètres (user, password) pour vérifier si le password est correct
- si le password est correct, affichez "Welcome,  [user.name]!" si l'utilisateur est admin, sinon affichez "Welcome,admin!"
- si le password est incorrect, affichez "Wrong password"
Vous DEVEZ utiliser l'opérateur ternaire pour écrire la condition if ... else if ... else
 */

let user = {
    name : 'mathias',
    password : 'lol',
    isAdmin : true,
    age : 16
}
checkPassword = function (password, usr){
    (user.password === password) ? (user.isAdmin === usr) ? document.write('<h1 style="text-align: center;">' + 'Welcome admin' +'</h1>')
        : document.write('<h1 style="text-align: center;">' + 'Welcome ' + user.name +'</h1>') : document.write('<h1 style="text-align: center;">' + 'Wrong password' +'</h1>');
};
checkPassword('lol', true);