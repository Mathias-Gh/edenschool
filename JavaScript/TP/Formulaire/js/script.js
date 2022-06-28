"use strict";
function insert(event) {
    event.preventDefault();
    let form1 = document.getElementById("name").value;
    let form3 = document.getElementById("email").value;
    let form4 = document.getElementById("phone").value;
    document.write("Vous vous appelez " + form1);
    document.write(" votre email est " + form3);
    document.write(" votre numéro de téléphone est le " + form4);
}
let btn = document.getElementById("btn").addEventListener("click", insert);