/**
 * CONSIGNE : Affichez la liste des élèves qui sont reçus à leur examen (note de 10 et plus) qui sont stockés dans le tableau. L'affichage se fera sous forme de liste dans la page.
 * Puis, dans une seconde liste, afficher cette fois les élèves recalés (note inférieure à 10).
 */

let arr = [
    ['Harry', 'Potter', 16],
    ['Neville', 'Longbottom', 14],
    ['Ron', 'Weasley', 8],
    ['Lavender', 'Brown', 12],
    ['Gregory', 'Goyle', 9],
    ['Seamus', 'Finnigan', 10],
    ['Hermione', 'Granger', 18],
    ['Draco', 'Malfoy', 17],
    ['Hannah', 'Abbot', 7],
    ['Katie', 'Bell', 12],
];
    document.write('<ul>');
for (let i = 0; i < arr.length; i++){
    if (arr[i][2] < 10){
        document.write('<li>' + arr[i][0] + ' ' + arr[i][1] + ' recalé' + '</li>' + '<br>');
    }
    else if (arr[i][2] > 10){
        document.write('<li>' + arr[i][0] + ' ' + arr[i][1] + ' reçu' + '</li>' + '<br>');
    }
}
document.write('</ul>');