let toppos = 0;
let rightpos = 0;
let glb = document.querySelector("#glb");
let btn = document.querySelector("button");
let appleIndex = 0;
let squares = document.querySelector("body");
let apple = document.querySelector(".apple");
let back = document.querySelector(".back");
let random = Math.floor(Math.random() * 100);
// 2ème étape function
// Action prévu pour intéragir avec un user

function topD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    toppos -= 80;
    // applique le changement de style
    glb.style.top = toppos + 'px';
    glb.classList.add("up");
    glb.classList.remove("left");
    glb.classList.remove("right");
    glb.classList.remove("bottom");
}
function leftD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    rightpos += 80;
    // applique le changement de style
    glb.style.right = rightpos + 'px';
    glb.classList.add("left");
    glb.classList.remove("up");
    glb.classList.remove("right");
    glb.classList.remove("bottom");
}
function rightD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    if (rightpos >= -1840){
        rightpos -= 50;
        // applique le changement de style
        glb.style.right = rightpos + 'px';
        glb.classList.add("right");
        glb.classList.remove("left");
        glb.classList.remove("up");
        glb.classList.remove("bottom");
        bordureRight(rightpos);
    }
}
function bottomD (){
    // augmenter la valeur de la variable de 10px (leftpos)
    toppos += 80;
    // applique le changement de style
    glb.style.top = toppos + 'px';
    glb.classList.add("bottom");
    glb.classList.remove("left");
    glb.classList.remove("right");
    glb.classList.remove("up");
}

// changer la couleur de fond du carré

// 3ème étape écouteurs d'évènement avec appel des fonctio  ns


window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp' || event.code == 'KeyW' ) {
        topD ();
        btn.classList.add("none");
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowDown' || event.code == 'KeyS') {
        bottomD ();
        btn.classList.add("none");
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft' || event.code == 'KeyA') {
        leftD ();
        btn.classList.add("none");
    }
});
window.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight' || event.code == 'KeyD') {
        rightD();
        btn.classList.add("none");
    }
});
btn.addEventListener('click', function() {
    this.classList.add("none");
    glb.classList.add("up");
    apple.classList.add("block");
});
const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

 setInterval(() => {
    apple.style.left= getRandom(0, 1600 - 200)+'px'; // 👈🏼 Horizontally
    apple.style.top = getRandom(0, 1000 - 100)+'px'; // 👈🏼 Vertically
}, 1000);

function bordureRight (param){
    if (param == -1700){
        glb.classList.add('animation-right');
        glb.classList.add('center');
    }
    else{
        glb.classList.remove('center');
    }
}
function bordureUp (param){
    if (param == -1840){
        glb.classList.add('animation-up');
        glb.classList.add('center');
    }
}
// on écrit la fonction dans l'écouteur
/*
btn.addEventListener("click", function (){

    carré.style.border = "5px dashed lightblue";
    carré.style.backgroundColor = "red";
});
 */