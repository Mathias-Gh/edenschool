"use strict";
let btn = document.querySelector("#btn");
function escape () {
    btn.style.position = "relative";
    btn.style.left = (Math.random() * 500) + 'px';
    btn.style.bottom = (Math.random() * 500) + 'px';
    btn.style.top = (Math.random() * 500) + 'px';
    btn.style.right = (Math.random() * 500) + 'px';
}
btn.addEventListener('mouseover', escape);