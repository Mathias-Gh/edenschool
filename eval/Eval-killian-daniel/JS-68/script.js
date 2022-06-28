// exo 1
/*
let nbr = parseInt(prompt("Choisir un nombre"));
let random = Math.floor(Math.random()*20) + 1;
if (isNaN(nbr)){
    console.log("Il y as une erreur")// point virgule
}
else {
    if (nbr > random){
        console.log("Vous avez gagner")// point virgule
    }
    else if (nbr < random){
        console.log("Vous avez perdu")// point virgule
    }
    else {
        console.log("Match Nul")// point virgule
    }
}//non respect de la consigne
// erreurs de saisie on peut marquer au dessus de 20
*/



// exo 2
/*
function exo2() { // nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    let nbr2 = parseInt(prompt("Choisir un autre nombre"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 + nbr2;
    }
}
document.write(exo2());

*/
// exo 3
/*
function exo3() { //nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 * 60;
    }
}
document.write(exo3());

 */


// exo 4
/*
function exo4() { //nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        nbr1 += 20;
        return nbr1;
    }
}
console.log(exo4())


 */
// exo 5
/*
function exo5() { //nom de function mal choisi
    let base = parseInt(prompt("Donner la base"));
    let hauteur = parseInt(prompt("Donner la hauteur"));
    if (isNaN(base)||isNaN(hauteur)){
        return "Il y as une erreur";
    }
    else {
        return base * hauteur / 2 ;
    }
}
console.log(exo5())
*/
/*
// exo 6
    function exo6(tablo) { //nom de function mal choisi
        return tablo.split('').reverse().join('');
    }
    console.log(exo6("hello"));


 */

// exo 7//non fait

// exo 8
/*
function exo8(tablo) { //nom de function mal choisi
    let first = tablo.length;
    return tablo[first - 1];
}
console.log(exo8(["hello", "tout", "le", "monde"]));
// dernier élément au lieu du premier
*/
// exo 9
/*
function exo9() { //nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    let nbr2 = parseInt(prompt("Choisir un autre nombre"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 / nbr2;
    }
}
console.log(exo9());//exercice non reussi
*/
// exo 10
/*
let nbr1 = parseInt(prompt("Choisir un nombre"));
let nbr2 = parseInt(prompt("Choisir un autre nombre"));
if (isNaN(nbr1) || isNaN(nbr2)){
    console.log("Il y as une erreur")// point virgule
}
else {
    if (nbr1 + nbr2 < 100){
        document.write("True".fontcolor("green"));
    }
    else {
        document.write("False".fontcolor("red"));
    }
}
*/

// exo 11
/*
function exo11() { //nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        if (nbr1 <= 0){
            console.log("True");
        }
        else {
            console.log("False");
        }
    }
}
console.log(exo11());
*/
// exo 12
/*
function exo12() { //nom de function mal choisi
    let choix1 = prompt("Choisir un");
    let choix2 = prompt("Choisir deux");
    if (choix1 == choix2){
        console.log("True");
    }
    else {
        console.log("False");
    }
}
console.log(exo12());


//erreur de saisie

// exo 13
/*
let html = document.querySelector("html")// point virgule
function exo13() { //nom de function mal choisi
    let nbr1 = parseInt(prompt("Choisir un nombre"));
    if (isNaN(nbr1)){
        return "Il y as une erreur";
    }
    else {
        if (nbr1 % 5 === 0){
            console.log("True");
            html.style.backgroundColor = "green";
        }
        else {
            console.log("False");
            html.style.backgroundColor = "red";
        }
    }
}


console.log(exo13());
*/
// exo 14
/*
function exo14() {
    let nbr1 = parseInt(prompt("Choisir un l'heure"));
    let nbr2 = parseInt(prompt("Choisir un les minute"));
    if (isNaN(nbr1) || isNaN(nbr2)){
        return "Il y as une erreur";
    }
    else {
        return nbr1 * 60 * 60 + nbr2 * 60;
    }
}
console.log(exo14());

*/
// exo 15
/*
function exo15(tablo) {

}//exo non fait
console.log(exo15([1,2,3,4,5,6,7,8,9,10]))// point virgule

*/
// exo 16

/*
function exo16(tablo) {// nom de function mal choisi
    return tablo[tablo.length - 1];
}
console.log(exo16(["1", "2", "3"]))//point virgule
*/
// exo 17
/*
function exo17(tablo) {
    let middle = parseInt(tablo.length / 2);
    if (middle + middle === tablo.length){
        return tablo[middle - 1]// point virgule
    }
    else {
        return tablo[middle]// point virgule
    }
}
console.log(exo17(["1", "2", "3", "4"]))//point virgule

*/

// exo 18
