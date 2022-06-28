let back = document.getElementById("background");
let btn = document.querySelectorAll("button");
let txt = document.querySelectorAll('input');
let img = document.querySelectorAll('img');
let sub = document.getElementById("submit");
event.preventDefault();

Luffy.addEventListener("click", function (){
    img[0].classList.toggle("block");
    txt[0].classList.toggle("block");
    // event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 0){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Goku.addEventListener("click", function (){
    img[1].classList.toggle("block");
    txt[1].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 1){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Deku.addEventListener("click", function (){
    img[2].classList.toggle("block");
    txt[2].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 2){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Jotaro.addEventListener("click", function (){
    img[3].classList.toggle("block");
    txt[3].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 3){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Izumi.addEventListener("click", function (){
    img[4].classList.toggle("block");
    txt[4].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 4){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Gon.addEventListener("click", function (){
    img[5].classList.toggle("block");
    txt[5].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 5){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Kilua.addEventListener("click", function (){
    img[6].classList.toggle("block");
    txt[6].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 6){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Naruto.addEventListener("click", function (){
    img[7].classList.toggle("block");
    txt[7].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 7){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Sasuke.addEventListener("click", function (){
    img[8].classList.toggle("block");
    txt[8].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 8){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});
Meliodas.addEventListener("click", function (){
    img[9].classList.toggle("block");
    txt[9].classList.toggle("block");
    event.preventDefault();
    for (let i = 0; i < 10; i++){
        if (i !== 9){
            img[i].classList.add("none");
            img[i].classList.remove("block");
            txt[i].classList.add("none");
            txt[i].classList.remove("block");
        }
    }
});

function getVal(event) {
    event.preventDefault();
    const val = document.querySelector('input').value;
    console.log(val);
}
sub.addEventListener("click", getVal);