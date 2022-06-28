/*
    Écrivez-vous un chat virtuel - les tamagochis ;-) !!!

    Créer un constructeur qui représente un chat :
    >> Commencer par lui donner des propriétés pour la fatigue et la faim.
    >> Ensuite, écrivez des méthodes qui augmentent et diminuent ces propriétés. Appelez-les quelque chose qui représente réellement ce qui augmenterait ou diminuerait ces choses, comme «nourrir», «dormir».
    >> Enfin, écrivez une méthode qui affiche le statut complet du chat. (Soyez créatif, par exemple "Paws a encore un petit creux, un saumon dodu ne serait pas refusé...", "Paws aimerait dormir au calme, merci !".)
    >> Pour ceux qui veulent s'amuser, manger donne sommeil et dormir donne faim.
    >> Instancier le constructeur avec un premier chaton "Paws" par exemple.
*/
let btn = document.querySelector('button');
let img = document.getElementById("pokemon");
function mega (){
        img.classList.toggle('mega');
}
btn.addEventListener("click", mega);