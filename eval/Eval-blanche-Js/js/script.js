"use strict";
/*
Eval blanche - JavaScript 4

Important :
Un affichage du résultat est attendu pour chaque exercice.
Si rien n’est précisé dans l’énoncé,vous pouvez choisir comment se fait l’affichage (page ou console).
*/

// --- Exo 1 --- //
/* Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
exemple :
isEmpty("1") ➞ false
isEmpty("EDENSchool") ➞ false
isEmpty("  ") ➞ false
isEmpty("") ➞ true
*/
/*
let string = prompt("Remplissez le champ");
function TrueOrFalse() { //fonction qui va déterminer si c'est vide ou non
    if (string === ""){
        return true;
    }
    else {
        return false;
    }
}
document.write(TrueOrFalse());
*/
// --- Exo 2 --- //
/**
 Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
 exemple :
 concatStr("True", "False") ➞ "True | False"
 concatStr("On", "Off") ➞ "On | Off"
 */
/*

function resultStr(str1, str2, space){
    space = ' | '; // variable qui va donner le tirait  au centre avec un espace
    console.log(str1 += space += str2);
}

resultStr("True", "False");
*/
// --- Exo 3 --- //
/*Il s’agit d’un jeu, nous devons comparer 2 nombres entiers choisis par l’utilisateur et par l’ordinateur. Ces 2 nombres sont compris entre 0 et 4 inclus.
Si l’utilisateur a choisi le plus petit nombre il a gagné, sinon il a perdu.
Si les choix sont identiques => “Match nul”
Créer la fonction permettant de gérer ce jeu.*/
/*
let usr = prompt('Choisissez un nombre entre 0 et 4');
let random = Math.floor(Math.random() * 4);//math random

function RandomOrUser (){
    if (isNaN(usr) || usr > 4 || usr < 0){ //erreur de saisie
        document.write("Réessayer");
    }
    else {
        if (usr > random){
            document.write('Vous avez perdu');
        }
        else if (usr == random){
            document.write('Match nul');
        }
        else {
            document.write('Vous avez gagné');
        }
    }
    console.log(random);
}
RandomOrUser();

 */
// --- Exo 4 --- //
/*
Jo l'écolo
Jo, votre meilleur pote a une animalerie qui propose des chats, des chiens et des oiseaux.
Pour rendre sa boutique plus verte et réduire ses factures d'eau, il vous demande de lui trouver un moyen de calculer combien de litres d'eau de pluie il doit
 récupérer par jour pour faire boire ses animaux. Evidemment, d'un jour à l'autre il n'a pas le même nombre d'animaux en fonction de ses ventes et des
  nouveaux pensionnaires qu'il chouchoute. Il va donc devoir faire le calcul toutes les 24h.

Les infos qu'il vous donne :
- un chat a besoin d'un demi litre d'eau par jour
- un chien boit bien 1400 ml
- et un oiseau a besoin de 12 cl d'eau

RESULTAT ATTENDU : préciser à Jo combien de litres d'eau il doit prévoir au total en précisant combien vont pour les chats, combien pour les chiens et
 pareil pour les oiseaux afin qu'il puisse
 facilement remplir les écuelles dans les 3 zones de sa boutique.
*/
/*
let animals = prompt("chat chien oiseau");
function PaddingWater (chat, chien, oiseau){// fonction pour déterminer l'eau de chaque animal
    if (animals != "chien" || animals != "oiseau" || animals != "chat"){
        document.write("Réssayer");
    }
    if (animals == "chat"){
        document.write("Pour un chat il faut un demie litre d'eau par jour");
    }
    else if (animals == "oiseau"){
        document.write("Pour un oiseau il faut 12 cl d'eau par jour");
    }
    else if (animals == "chien"){
        document.write("Pour un chien il faut 1400 ml d'eau par jour");
    }
}
PaddingWater();
*/
// --- Exo 5 --- //
/* Créer une fonction qui prend un nombre en argument, décrémente le nombre de 99 et renvoie le résultat.*/
/*
function Decrements(number){
    console.log(number -= 99);
}
Decrements(100);
*/
// --- Exo 6 --- //
/* Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal
 au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
    Exemple:
compareSize("AA", "BB") ➞ true
compareSize("123", "1") ➞ false
compareSize("Ali", "Bob") ➞ true
 */
/*
function compareSize (str1, str2){ // fonction qui va savoir quel argument est le plus grand
    if (str1.length === str2.length){
        return true;
    }
    else {
        return false;
    }
}
console.log(compareSize("AA", "BB"));
 */

// --- Exo 7 --- //
/* Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle. (on ajoute la hauteur avec la largeur et on multiplie par deux).
Exemple:
getPerimeter(2, 6) ➞ 16
getPerimeter(3, 10) ➞ 26
getPerimeter(1, 5) ➞ 12
*/
/*
function getPerimeter (hauteur, largeur){// calcul du périmètre
    console.log((hauteur += largeur) * 2);// réaffectation inutile
}

getPerimeter(5, 5);

 */
// --- Exo 8 --- //
/*
Écrire une fonction qui renvoie 'true' lorsqu'une chaîne contient au moins un chiffre sinon renvoie 'false'.
 */
/*
function TrueOrFalse (str){ //savoir si c'est un nombre ou non
    if (isNaN(str)){
        return false;
    } else{
        return true;
    }
}
console.log(TrueOrFalse('5'));
*/
// --- Exo 9 --- //
/* Écrire un programme pour trouver le plus petit des cinq entiers donnés.
    Exemple:
getMin(5, 9, 28, 0, 1) ➞ 28
getMin(2, 3, 10, 66, 57) ➞ 62
Faire cet exercice sans utiliser la fonction Math.min()
*/
/*
function GetMin (str1, str2, str3, str4, str5) { // fonction qui permet de prendre la valeur la plus faible
    let tablo = [str1, str2, str3, str4, str5];
    return tablo.sort((str1, str2, str3, str4, str5) => str1 - str2 - str3 - str4 - str5)[0];
}

console.log(GetMin(2, 5, 10, 15, 2));

 */
// ---  Exo 10 --- //
/* Écrire une fonction pour inverser un tableau.
Ne pas utiliser la méthode reverse()
Exemple:
    [1, 2, 3] ➞ [3, 2, 1]
    [1, true, ‘hi’] ➞ [‘hi’, true, 1]
 */
/*
function Reversetable(str) { reverse sans utiliser reverse
    let table = new Array;
    let a = str.length;
    for (let i = a - 1; i >= 0; i--) {
        table.push(str[i]);
    }
    return table;
}
    let baseTable = [1, 2, 3];
    let reversetable = Reversetable(baseTable);
    console.log(reversetable);
    */

// --- Exo 11 --- //
/* Écrire une fonction prenant 2 chiffres (choisis par l’utilisateur ou à l’appel de la fonction dans le code et la console, au choix).
Le premier paramètre est divisé par le deuxième. Afficher ce qui reste une fois la division effectuée.
 */
/*
let nb1 = prompt('choisissez un chiffre');
let nb2 = prompt('choisissez un autre chiffre');
function divide (){// fontion qui divise le premier chiffre par le deuxième

    if (isNaN(nb1) && isNaN(nb2) || isNaN(nb1) || isNaN(nb2) || nb1 === "" || nb2 === "" || nb1 === " " || nb2 === " "){ //énorme condition
        document.write("réssayer");
    }
    else  {
        let nb = nb1 % nb2;//on va devoir utiliser un modulo
        console.log(nb);
    }
}
divide();

 */

// --- Exo 12 --- //
/*Créer une fonction qui prend un tableau et renvoie le premier élément.
    let array = [1, 2, 3, 4, 5];*/
/*
function GetFisrtElement (str1, str2, str3, str4, str5){ // fonction qui prend le premier élément
    let array = [1, 2, 3, 4, 5];
    console.log(array[0]);
}
GetFisrtElement();

 */

// --- Exo 13 --- //
/* Avec deux nombres, retourner TRUE si la multiplication des deux nombres est inférieure à 50. Sinon, retourne FALSE.
TRUE s’affiche en vert
FALSE s’affiche en rouge */
/*
function multiplication (str1, str2){
    if (str1 * str2 < 50){
        document.write("true".fontcolor("green"));
        return true;
    } else if (str1 * str2 == 50){
        document.write("c'est égal");
    } else {
        document.write("false".fontcolor("red"));
        return false;
    }
}
multiplication(20, 2);
*/
// --- Exo 14 --- //
/* Créer une fonction qui prend un nombre et renvoie TRUE s’il est négatif, sinon retourne FALSE.*/
/*
function TrueOrFalse(number){
    if (number < 0){
        return true;
    } else {
        return false;
    }
}
console.log(TrueOrFalse(5));
*/
// --- Exo 15 --- //
/*Créer une fonction qui prend un tableau et renvoie l'avant-dernier élément du tableau.
    Exemple:
[1, 2, 3, 4] ➞ 3
[‘Alex’, ‘Bob’, ‘Emily’] ➞ ‘Bob’*/
/*
function beforeLast (str1, str2, str3, str4, str5, str6){
    let table = [str1, str2, str3, str4, str5, str6];
    let lastelement = table.pop() -1; // variable qui va nous permettre de séléctionner l'avant dernier
    console.log(lastelement);
}
beforeLast(1, 2, 3, 4, 5, 6);

 */

// --- Exo 16 --- //
/* Ecrivez une fonction nommée isTooLong qui :

    prend une chaîne de caractères comme argument
    renvoie vrai dans une boîte de dialogue si la longueur de la chaîne dépasse 10 caractères
    renvoie faux dans une boîte de dialogue dans les autres cas

    appelez la fonction pour la tester et affichez chaque résultat
 */
/*
function isTooLong (str) {// on calcule le nombre de caractère
    if (str.length > 10) {
        return true;
    } else {
        return false;
    }
}
alert(isTooLong("12345678910"));
*/
// --- Exo 17 --- //
/*Créer une fonction qui prend un tableau et renvoie l’élément au milieu du tableau. Si le tableau contient un nombre pair de données, la fonction
 retournera la donnée placée juste avant de franchir cette moitié.
    Exemple:
[1, 2, 3, 4] ➞ 2
[‘Alex’, ‘Bob’, ‘Emily’] ➞ ‘Bob’
[‘Alex’, ‘Pixel’, ‘Bob’, ‘Emily’] ➞ ‘Pixel’
 */
/*
function Pickmiddle(table) {// fonction qui prend le centre du tableau
    let center = table.length / 2; // on divise le tableau par deux pour le remultiplier derière
    if (center * 2 == table.length){
        return table[center - 1];
    }
    else {
        return table[center];
    }
}
console.log(Pickmiddle(["Alex", "Pixel", "Bob", "Emily"]));

 */

// --- Exo 18 --- //
/*Améliorer la fonction de l’exo précédent pour un tableau contenant :
    - un tableau contenant l’élément du milieu du tableau de base
- le tableau de base sans l’élément du milieu
Exemple:
[1, 2, 3, 4] ➞ [[2], [1, 3, 4]]
[‘Alex’, ‘Bob’, ‘Emily’] ➞ [[‘Bob’], [‘Alex’, ‘Emily’]]
[‘Alex’, ‘Pixel’, ‘Bob’, ‘Emily’] ➞ [[Pixel’], [‘Alex’, ‘Bob’, ‘Emily’]]*/
/*
function Pickmiddle(table) {
    let center = table.length / 2;
    if (center * 2 == table.length){
        return table[center - 1];
    }
    else {
        return table[center];
    }
}

console.log(Pickmiddle(["Alex", "Pixel", "Bob", "Emily"]));
*/
// --- Exo 19 --- //
/* Créer une fonction qui utilisera la fonction de l'exo précédent afin d’afficher  les tableaux dans la page sous forme de liste.
    Exemple:
[‘Alex’, ‘Pixel’, ‘Bob’, ‘Emily’] ➞ [[Pixel’], [‘Alex’, ‘Bob’, ‘Emily’]]
Affichage attendu :
Liste n°1
° Pixel

Liste n°2
° Alex
° Bob
° Emily
*/
/*
function Pickmiddle(table) {
    let center = table.length / 2;
    if (center * 2 == table.length){
        return table[center - 1];
    }
    else {
        return table[center];
    }
}
console.log(Pickmiddle(["Alex", "Pixel", "Bob", "Emily"]));
 */