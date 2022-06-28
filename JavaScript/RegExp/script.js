/* 1- Écrire une fonction qui permet de tester si une chaîne de caractère passée en paramètre commence par une lettre majuscule ou minuscule entre 'a' et 'd'.
function string (maj){
    let reg = /(A|B|C|D)/i
    let str = "daniel";
    let da = reg.test(str[0]);
    console.log(da)
}

string();

 */


// 2- Écrire une fonction qui renvoie 'true' lorsqu'une chaîne contient un seul caractère '@' sinon renvoie 'false'.
function ar (){
    let reg = '@';
    const regex = @;
    if (reg.match(regex)){
        return true;
    } else {
        return false;
    }
}
ar();

/* 3- Écrire une fonction qui renvoie 'true' lorsqu'une chaîne contient au moins un chiffre sinon renvoie 'false'.
function string (maj){
    let reg = /(0|1|2|3|4|5|6|7|8|9)/;
    let str = "5";
    let da = reg.test(str);
    console.log(da)
}
string();
*/