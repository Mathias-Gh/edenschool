function Stylo (color){
    this.couleur = color;
    this.niveau = 100;
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
}

let bic = new Stylo('noir');
bic.ouvrir();
bic.ecrire('À la niche');
console.log(bic);