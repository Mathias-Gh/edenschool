"use strict";
let btn = document.getElementById('btn')
let fix = document.getElementById("fix");
function remove(){
    fix.remove()
}
btn.addEventListener("click", remove);