"use strict";
/**--------------------------------------------------
 * ------ VII- EXOS - boucles et tableaux HTML ------
 ---------------------------------------------------*/
/*
1- afficher avec une boucle For les chiffres de 0 à 9 dans une table HTML sur une seule ligne
2- puis avec 1 cellule par ligne
3- les cellules paires en rouge les impaires en vert
4- faites une boucle for qui affiche 0 à 9 sur la même ligne, répétée sur 10 lignes, dans une table HTML
5- pareil en numérotant les cellules de 0 à 99
*/
document.write('<table>');
document.write('<tr>');
for (let i = 0; i <= 99; i++){
    if (i % 2 == 0){
        document.write("<td style='color: green; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        document.write('<tr>');
    }
    else{
        document.write("<td style='color: red; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        document.write('<tr>');
    }
}
document.write('<tr>');
document.write('</table>');