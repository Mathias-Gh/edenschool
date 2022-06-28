/**
 * /* tableaux multidimensionnels
 EXO - Langages préférés
 * Afficher (console ou page) pour chaque élève son langage préféré : "Harry Potter préfère le JavaScript" ...
 */

let eleves = [['Harry', 'Potter', 'JavaScript'], ['Hermione', 'Granger', 'PHP'], ['Ronald', 'Weasley', 'HTML'], ['Neville', 'Longbottom', 'CSS'], ['Draco', 'Malfoy', 'POO']];

for (let i = 0; i < eleves.length; i++){
    document.write(eleves[i][0] + ' ' + eleves[i][1] + ' préfere le ' + eleves[i][2] + '<br>');
}

let msg = document.getDocumentById('#message');

let sub = document.getElementById('emc-submit');
let home = document.getElementById("home");
//let block = document.querySelector(".block");
let none = document.getElementById("none");

function btn () {
    home.innerHTML = "Home";
    none.id = 'block';
}

sub.addEventListener('key', btn);