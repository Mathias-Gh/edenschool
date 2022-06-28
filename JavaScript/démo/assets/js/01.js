/*
//commentaire en ligne

// alert('à la niche !');
// alert('à la niche !');
// alert('à la niche !');
// alert('à la niche !');

// 1. déclarer une variable


let prenom;

console.log('prenom');

// 2. affetcter une valeur
prenom = 'pixel';

// 3. afficher dans la console la valeur initial de la variable
console.log(prenom);
let name = "Harry";

//4. réafectation
prenom = 'mathias';
console.log(prenom);

//5. types de variables
let age = 11;
let taille = 1.4;
let parent = false; prompt("nb ?");

// 6. constantes
const pays = 'France';

// 7. Les boites de dialoges

let info = alert('Info pour le client');
let confirm = ('Question au client');
let form = prompt('Champ à renseigner');

console.log(info);
console.log(confirm);
console.log(form);

//Exo
let tonprenom = prompt('Quel est ton prénom ?');
age = prompt('Quel est ton age ?');
age = 2021 - age;
let niche = document.write("Tu t'appelles " + tonprenom + ' et tu es né en ' + age);

let poire = "poires";
let pommes = "pommes";
let poidsPomme = 0.8;
let poidsPoire = 0.7;
let poidsTotal = poidsPoire + poidsPomme;

document.write("vous avez acheté des " + pommes + " et des " + poire + " pour un poids total de " + poidsTotal + "kg");

//Opérations sur les variables
//connaitre le type
name = "Harry";
console.log(typeof(name));


// retourne un entier à partir d'une chaine de caractère
let nb1 = parseInt(prompt("nb ?"));
let nb2 = prompt("nb ?");

console.log(typeof(nb1));
console.log(typeof(nb2));

let res = nb1 * nb2;
console.log(res);

//retourne un chiffre décimal à partir d'une chaine de caractère
let decimal = parseFloat(prompt('nb'));
console.log(decimal);
console.log(typeof(decimal));

//convertir un Number en String
let nb = 10;
let str = nb.toString();
console.log(nb);
console.log(str);
console.log(typeof(nb));
console.log(typeof(str));
*/
//--compter le nb de lettres d'une string
let phrase = "Si vous êtes agités, à la niche !";
//console.log(phrase.length); // 33 espaces inclus

//--retourner une string en MAJ
//console.log(phrase.toUpperCase());
//console.log(phrase.toLowerCase());
//console.log(phrase.slice(3, 10));
//slice (pt départ + 1, nb de caractère)


// -- extraire une partie d'une string
console.log(phrase.substring(3, 10));
alert('ok or no');