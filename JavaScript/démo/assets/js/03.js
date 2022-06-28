// --1-- TANT QUE // WHILE

/*
variables pour compter les tours

tant que (condtion si TRUE){
    code à répéter ...
    ...

    incrémentation du compteur (pour passer au tour de boucle suivant)
}*/

let i = 0; //compteur initialisé à 0

/*while ( i <= 5 ){ // tant que i est inférieur ou égal à 5
    document.write(i + '<br>');

    //incrémentation
    i++;
}

while ( i <= 5 ){ // tant que i est inférieur ou égal à 5
    if (i % 2 == 0){
        document.write('<p style="color: blue; font-size: 50px;">' + i + '</p>');
    } else{
        document.write('<p style="color: red; font-size: 50px;">' + i + '</p>');
    }

    //incrémentation
    i++;
}


// --2-- boucle FOR / POUR

/*
pour (initalisation du compteur ; condtion ; incrémentation){
    ...script à répeter...
}

for (let i = 0; i <= 5; i++){
    document.write(i + '<br>');
}

console.log(i);

for(let a = 0; a <= 7; a++) {
    document.write('<br>');
    for (let i = 0; i < a; i++) {
        document.write('# ');
    }
}

let star = '#';
for (let a = 7; a > 0; a--){
    for (let i = 0; i < a; i++){
        document.write('# ');
    }
    document.write('<br>');
}

document.write('<hr>');
document.write('<select>');
document.write('<option>2021</option>');
for (let i = 2021; i > 1900; i--){
    document.write('<option>' + i + '</option>');
}
document.write('<option>1900</option>');
document.write('</select>');
document.write('<hr>');

for (let i  = 10; i >= 1; i--){
    document.write(' tour n°' + i);
}
*/
let compteur = 1;
while (compteur <= 10){
    document.write('tour n°' +  compteur);
    compteur++;
}