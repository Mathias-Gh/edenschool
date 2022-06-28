function friction (){
    this.encre = 100;
    this.ouvert = false;

    this.ouvrir = function () { this.ouvert = true; }
    this.fermer = function () { this.ouvert = false; }

    this.ecrire = function (w) {
        if (this.ouvert){
            console.log(w);
        } else {
            console.log("il faut enlever le bouchon avant");
        }
    }
    this.champ = prompt('écrivez du texte');
    this.color = prompt('choisissez une couleur');
    document.write('<h1>' + this.champ.fontcolor(this.color) +'</h1>');
    this.encre -= this.champ.length;
    if (this.encre <= 0) {
        this.fullEncre = prompt("combien d'unité d'encre voulez-vous");
        this.encre = this.fullEncre;
    }
}
let bic = new friction();
bic.ouvrir();
bic.ecrire('À la niche');
console.log(bic);