/**
 * LES CONDITIONS
 */
/*
// -- 1-- IF ... ELSE IF ... ELSE
if (1 < 10){
    document.write('IF ... SI');
} else if( 1 > -10){
    document.write('ELSE IF ... SINON SI');
} else{
    document.write('ELSE ... SINON');
}

document.write('<hr>');
//--2-- SWITCH

let query = prompt('oui ou non ?');

switch (query){
    case 'oui': // if
        document.write('vous avez dit oui');
        break; // si le cas est true on sort du switch ici

    case 'non': // else if
        document.write('vous avez dit non');
        break; // si le cas est true on sort du switch ici

    default: //else
        document.write('réponse non reconnue');
}
*/
//--EXO--

let gout = prompt('Préférez-vous daniel, melchior ou mathias ?');

switch (gout){
    case 'daniel':
    case 'Daniel':
        document.write('Vous êtes danielophile' + '<hr>');
        break;
    case 'melchior':
    case 'Melchior':
        document.write('Vous êtes melchiorophile' + '<hr>' );
        break;
    case 'mathias':
    case 'Mathias':
        document.write('Vous êtes Mathiasophile' + '<hr>');
        break;
    default:
        document.write("désaterclass");
}