let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let img = document.getElementById("pokemon");
function megaX () {
    img.setAttribute('src', 'img/mega-dracaufeuX.gif');
}
function megaY () {
    img.setAttribute('src', 'img/mega-dracaufeu.gif');
}
function normal () {
    img.setAttribute('src', 'img/dracaufeu.gif');
}
    btn.addEventListener("click", normal);
    btn2.addEventListener("click", megaY);
    btn3.addEventListener("click", megaX);