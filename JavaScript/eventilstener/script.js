let haut = document.querySelector(".haut");
let gauche = document.querySelector(".gauche");
let droite = document.querySelector(".droite");
let bas = document.querySelector(".bas");
let carré = document.querySelector(".rose");
let toppos = 0;
let rightpos = 0;

// 2ème étape function
// Action prévu pour intéragir avec un user

function topD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    toppos -= 10;
    // applique le changement de style
    carré.style.top = toppos + 'px';
    carré.classList.remove("rond");
    carré.classList.add("para");
}
function leftD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    rightpos += 10;
    // applique le changement de style
    carré.style.right = rightpos + 'px';
    carré.classList.remove("para");
    carré.classList.remove("rond");
}
function rightD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    rightpos -= 10;
    // applique le changement de style
    carré.style.right = rightpos + 'px';
    carré.classList.remove("para");
    carré.classList.add("rond");
}
function bottomD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    toppos += 10;
    // applique le changement de style
    carré.style.top = toppos + 'px';
    carré.classList.remove("para");
    carré.classList.remove("rond");
}


// changer la couleur de fond du carré

// 3ème étape écouteurs d'évènement avec appel des fonctions
haut.addEventListener("click", topD);
gauche.addEventListener("click", leftD);
droite.addEventListener("click", rightD);
bas.addEventListener("click", bottomD);

window.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowUp' || event.code === 'KeyW' ) {
        topD ();
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
        bottomD ();
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
        leftD ();
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
        rightD();
    }
});
// on écrit la fonction dans l'écouteur
/*
btn.addEventListener("click", function (){

    carré.style.border = "5px dashed lightblue";
    carré.style.backgroundColor = "red";
});
 */