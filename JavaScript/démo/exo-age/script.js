"use strict";
let age = prompt("Quel age avez-vous ?");
if (isNaN(age)){
    document.write("Vous n'avez pas indiqué un nombre");
}
else if (age == "" || age == null){
    document.write("Vous n'avez rien mis");
}
else if(age >= 16){
    document.write("Bienvenue");
}
else if(age < 16){
    document.location.href="https://www.google.fr/";
}