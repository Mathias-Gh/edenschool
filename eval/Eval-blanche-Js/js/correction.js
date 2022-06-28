    /*
Eval blanche - JavaScript 4

Important :
Un affichage du résultat est attendu pour chaque exercice.
Si rien n'est précisé dans l'énoncé,vous pouvez choisir comment se fait l'affichage (page ou console).
*/

// --- Exo 1 --- //
/* Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.
exemple :
isEmpty("1") ➞ false
isEmpty("EDENSchool") ➞ false
isEmpty("  ") ➞ false
isEmpty("") ➞ true
*/
function isEmpty(str) {
    return str.length == 0;
}

// --- Exo 2 --- //
/**
 Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».
 exemple :
 concatStr("True", "False") ➞ "True | False"
 concatStr("On", "Off") ➞ "On | Off"
 */
function concatStr(str1, str2) {
    return `${str1} | ${str2}`;
}

// --- Exo 3 --- //
/*Il s'agit d'un jeu, nous devons comparer 2 nombres entiers choisis par l'utilisateur et par l'ordinateur. Ces 2 nombres sont compris entre 0 et 4 inclus.
Si l'utilisateur a choisi le plus petit nombre il a gagné, sinon il a perdu.
Si les choix sont identiques => "Match nul"
Créer la fonction permettant de gérer ce jeu.*/

let userNumber = prompt('choisissez un nombre');
let computerNumber = Math.floor(Math.random() * 5);
function winner(user, computer) {
    // gestion des erreurs de saisie 1/2 (string, booléen, null ou string vide
    if (isNaN(user) || user === '' || user === null) {
        document.write('veuillez saisir un chiffre');
        // gestion des erreurs de saisie 2/2 (chiffre n'est pas dans la fourchette autorisée)
    } else if (parseInt(user) < 0 || parseInt(user) > 4) {
        document.write('entre 0 et 4, merci');
    } else {
        // pas d'erreur de saisie => on exécute le script du jeu
        if (user < computer) {
            document.write('bravo tu as gagné');
        } else if (user === computer) {
            document.write('égalité !!')
        } else {
            document.write('dommage tu as perdu');
        }
    }
}
winner(userNumber, computerNumber);

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

function calcWater(cat, dog, bird){
    if(!isNaN(cat) && !isNaN(dog) && !isNaN(bird)){
        // pour chaque type d'animal on calcule le volume d'eau
        let catW = cat * 0.5;
        let dogW = dog * 1.4;
        let birdW = bird * 0.12;
        // ensuite on les additionne pour obtenir le volume global journalier
        let res = (catW + dogW + birdW).toFixed(2);
        // Affichage du résultat
        return `You will need ${catW} liters of water for the cats, ${dogW} for the dogs and ${birdW} for the feathered pets, adding up to a grand total of ${res} liters of water per day.`;
    } else {
        return `Il faut renseigner des chiffres`;
    }
}
calcWater(5, 2, 4);


// --- Exo 5 --- //
/* Créer une fonction qui prend un nombre en argument, décrémente le nombre de 99 et renvoie le résultat.*/
let usr = parseInt(prompt('choisissez un nombre'));
function substract(nb){
    if(!isNaN(nb)){
        return nb -= 99;
    } else {
        console.log("Vous n'avez pas renseigné un nombre");
    } }
substract(usr);

// --- Exo 6 --- //
/* Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal
 au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.
    Exemple:
compareSize("AA", "BB") ➞ true
compareSize("123", "1") ➞ false
compareSize("Ali", "Bob") ➞ true
 */
function compareSize(str1, str2) {
    return str1.length === str2.length;
}

// --- Exo 7 --- //
/* Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d'un rectangle. (on ajoute la hauteur avec la largeur et on multiplie par deux).
Exemple:
getPerimeter(2, 6) ➞ 16
getPerimeter(3, 10) ➞ 26
getPerimeter(1, 5) ➞ 12
*/
function getPerimeter(height, width) {
    return (height + width) * 2;
}

// --- Exo 8 --- //
/*
Écrire une fonction qui renvoie 'true' lorsqu'une chaîne contient au moins un chiffre sinon renvoie 'false'.
 */

function strNumber(str){
    let pattern =/\d/;
    // let pattern =/[0-9]/g; // autre possibilité de pattern

    /* La fonction search peut prendre en paramètre une expression régulière et renvoie la position de la 1ère occurrence trouvée ou -1 si elle n'existe pas */
    if(str.search(pattern) !== -1){
        console.log(str + " chaîne valide : contient un nombre.");
    } else {
        console.log(str + " chaîne invalide.");
    }
}

strNumber('hell023');

// --- Exo 9 --- //
/* Écrire un programme pour trouver le plus petit des cinq entiers donnés.
    Exemple:
getMin(5, 9, 28, 0, 1) ➞ 28
getMin(2, 3, 10, 66, 57) ➞ 62
Faire cet exercice sans utiliser la fonction Math.min()
*/

function getMin(nb1, nb2, nb3, nb4, nb5){
    if(nb1 < nb2 && nb1 < nb3 && nb1 < nb4 && nb1 < nb5){
        alert(nb1 + ' est le nombre le plus petit');
    }
    else if(nb2 < nb1 && nb2 < nb3 && nb2 < nb4 && nb2 < nb5){
        alert(nb2 + ' est le nombre le plus petit');
    } else if(nb3 < nb1 && nb3 < nb2 && nb3 < nb4 && nb3 < nb5){
        alert(nb3 + ' est le nombre le plus petit');
    } else if(nb4 < nb1 && nb4 < nb2 && nb4 < nb3 && nb4 < nb5){
        alert(nb4 + ' est le nombre le plus petit');
    } else{
        alert(nb5 + ' est le nombre le plus petit');
    }
}

// solution en utilisant ARGUMENTS
function getMin() {
    var min = arguments[0];
    console.log(min);
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
getMin(5, 9, 28, 0, 1);

// ---  Exo 10 --- //
/* Écrire une fonction pour inverser un tableau.
Ne pas utiliser la méthode reverse()
Exemple:
    [1, 2, 3] ➞ [3, 2, 1]
    [1, true, 'hi'] ➞ ['hi', true, 1]
 */
let tab = [1, true, 'hi'];
function rev(tab){
    let res = [];
    for(let i = tab.length - 1; i >= 0; i--){
        console.log(tab[i]);
        res.push(tab[i]);
    }
    return res; }
rev(tab);

// --- Exo 11 --- //
/* Écrire une fonction prenant 2 chiffres (choisis par l'utilisateur ou à l'appel de la fonction dans le code et la console, au choix).
Le premier paramètre est divisé par le deuxième. Afficher ce qui reste une fois la division effectuée.
 */
function modulo(nb1, nb2){
    let res = nb1 % nb2;
    return res;
}
modulo(1, 3);

// --- Exo 12 --- //
/*Créer une fonction qui prend un tableau et renvoie le premier élément.
    let array = [1, 2, 3, 4, 5];*/
function getFirstElement(arr){
    return arr.shift();
}

// --- Exo 13 --- //
/* Avec deux nombres, retourner TRUE si la multiplication des deux nombres est inférieure à 50. Sinon, retourne FALSE.
TRUE s'affiche en vert
FALSE s'affiche en rouge */

function overFifty(nb1, nb2){
    let res = nb1 * nb2;
    if(res < 50){
        document.write('<h2 style="color: green;"> TRUE</h2>');
        return true;
    }
    else {
        document.write('<h2 style="color: red;"> FALSE </h2>');
        return false;
    }
}
overFifty(3, 10);
overFifty(30, 95);

// --- Exo 14 --- //
/* Créer une fonction qui prend un nombre et renvoie TRUE s'il est négatif, sinon retourne FALSE.*/

function overZero(nb){
    return nb < 0;
}
overZero(-10);

// --- Exo 15 --- //
/*Créer une fonction qui prend un tableau et renvoie l'avant-dernier élément du tableau.
    Exemple:
[1, 2, 3, 4] ➞ 3
['Alex', 'Bob', 'Emily'] ➞ 'Bob'*/
let array = [1, 2, 3, 4, 5];
function getBeforeLast(arr){
    return arr[arr.length - 2];
}
console.log(getBeforeLast(array));

// return arr.pop() - 2;

// --- Exo 16 --- //
/* Ecrivez une fonction nommée isTooLong qui :

    prend une chaîne de caractères comme argument
    renvoie vrai dans une boîte de dialogue si la longueur de la chaîne dépasse 10 caractères
    renvoie faux dans une boîte de dialogue dans les autres cas

    appelez la fonction pour la tester et affichez chaque résultat
 */
function isTooLong(str){
    if(isNaN(str) && str.length > 10){
        alert(true);
    } else {
        alert(false);
    }
}
isTooLong('Hello'); // false
isTooLong(6789); // false
isTooLong(12345678987654); // false
isTooLong('Hello les amis'); // true


// --- Exo 17 --- //
/*Créer une fonction qui prend un tableau et renvoie l'élément au milieu du tableau. Si le tableau contient un nombre pair de données, la fonction
 retournera la donnée placée juste avant de franchir cette moitié.
    Exemple:
[1, 2, 3, 4] ➞ 2
['Alex', 'Bob', 'Emily'] ➞ 'Bob'
['Alex', 'Pixel', 'Bob', 'Emily'] ➞ 'Pixel'
 */
let tab = [1, 'Pixel', 569, 'hi'];
function midArray(arr){
    let res = '';
    let mid = (arr.length -1)/ 2;
    console.log(mid);
    if(mid % 2 === 0){
        res = arr[mid];
    } else {
        mid = mid.toFixed() - 1;
        res = arr[mid];
    }
    console.log(res);
    return res;
}
midArray(tab);


// --- Exo 18 --- //
/*Améliorer la fonction de l'exo précédent pour un tableau contenant :
    - un tableau contenant l'élément du milieu du tableau de base
- le tableau de base sans l'élément du milieu
Exemple:
[1, 2, 3, 4] ➞ [[2], [1, 3, 4]]
['Alex', 'Bob', 'Emily'] ➞ [['Bob'], ['Alex', 'Emily']]
['Alex', 'Pixel', 'Bob', 'Emily'] ➞ [[Pixel'], ['Alex', 'Bob', 'Emily']]*/

let tab = ['Alex', 'Pixel', 'Bob', 'Emily'];
function spliceMidArr(arr){
    let midIndex = '';
    let mid = (arr.length -1)/ 2;
    console.log(mid);
    if(mid % 2 === 0){
        midIndex = arr[mid];
    } else {
        midIndex = mid.toFixed() - 1;
    }

    let res = tab.splice(midIndex, 1);
    console.log(res);
    return ([res, tab]);
}
spliceMidArr(tab);

// --- Exo 19 --- //
/* Créer une fonction qui utilisera la fonction de l'exo précédent afin d'afficher  les tableaux dans la page sous forme de liste.
    Exemple:
['Alex', 'Pixel', 'Bob', 'Emily'] ➞ [[Pixel'], ['Alex', 'Bob', 'Emily']]
Affichage attendu :
Liste n°1
° Pixel

Liste n°2
° Alex
° Bob
° Emily
*/

function showList(tabs){
    let res1 = spliceMidArr(tabs);

    for(let i = 0; i < res1.length; i++){
        document.write('<ul>Liste n° ' + (i + 1));
        for(let j = 0; j < res1[i].length; j++){
            //console.log(res1[i]);
            document.write('<li>' + res1[i][j] + '</li>');
        }
        document.write('</ul>');
    }
}