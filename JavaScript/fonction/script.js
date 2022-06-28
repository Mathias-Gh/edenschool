/*
 * But : il faut utiliser les fonctions écrites au-dessus pour générer les
 * chaînes de caractères attendues, en utilisant chaque fois le
 * moins de code possible.
 *
 * La chaîne de caractères sera stockée dans la variable result et cette
 * variable affichée dans la console.
 *
 * Chaîne #1 : A
 * Chaîne #2 : AC
 * Chaîne #3 : ABBCCC
 * Chaîne #4 : CBCBA
 * Chaîne #5 : CB!C CB!B CB!A
 */
function letterA() {
    return "A";
}

function letterB() {
    return "B";
}

function letterC() {
    return "C";
}

let index = '!';
let result = letterA();

console.log(result);


result += letterC();
console.log(result);


result = letterA();
for (let i = 0; i < 2; i++){
    result += letterB();
}
for (let j = 0; j < 3; j++){
    result += letterC();
}
console.log(result);

result = "";
for (let h = 0; h < 2; h++){
    result += letterC() + letterB();
}
result += letterA()
console.log(result);

result = "";
function souris (){
    return letterC() + letterB() + index;
}
result += souris() + letterC() + ' ' + souris() + letterB() + ' ' + souris() + letterA();

console.log(result);