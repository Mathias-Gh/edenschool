let btn = document.getElementById("dark");
let header = document.querySelector("header");
let list = document.getElementsByClassName('li');

let compteur = 0;
function dark (){
    header.classList.toggle("black");
    btn.classList.toggle('light');
    btn.classList.toggle('blackFont');
}
function text (){
    if (compteur % 2 === 0) {
        btn.innerHTML = 'Dark Mode';
    } else {
        btn.innerHTML = 'Light Mode';
    }
    compteur += 1;
}
document.querySelector(".block").addEventListener('click', text);
btn.addEventListener("click", dark);