"use strict";
// ----------------- ÉNONCÉ -----------------

/**
 * Créer un objet littéral pour une voiture
 * Cet objet devra avoir les propriétés suivantes :
 *  - marque (str)
 *  - couleur (str)
 *  - motorisation (obj) détaillant :
 *          - énergie (str)
 *          - puissance (str)
 *          - garantie (bool)
 *
 * et la méthode
 *  - afficherOrigine (f)
 *  qui va simplement afficher le pays d'origine de la voiture
 *
 *  Afficher une par une dans la page dans des paragraphes les informations suivantes :
 *  - la marque de la voiture,
 *  - sa couleur,
 *  - son origine,
 *  - son énergie,
 *  - si elle est sous garantie ou non.
 */
let car = {
    marque: "mercedes",
    couleur: "grise",
    motorisation:{
        énergie: "1000w",
        puissance: "200ch",
        garantie: "3ans"
    },
    afficherOrigine : function  (){
        return (" l'origine de la voiture est l'Allemagne ");
    }
}
document.write('la marque de la voiture est ' + car.marque + ' la couleur de la voiture est ' + car.couleur + car.afficherOrigine() + "son énergie est de " + car.motorisation.énergie);