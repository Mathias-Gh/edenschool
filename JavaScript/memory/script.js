const fond = document.querySelectorAll(".fond");
const carte = document.querySelectorAll(".carte");

for (const a of carte) {
    a.addEventListener("click", function () {
        a.classList.add("block");
    });

    for (const i of fond) {
        i.addEventListener("click", function () {
            i.classList.add("none");
            a.classList.add("block");
        });
    }
}