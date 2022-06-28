"use strict";
/*
  EXO Sac à dos
  Réaliser une classe Sac qui permettra de faire ses courses. Il ne peut contenir qu'un nombre limité d'articles.
  On peut y mettre des articles, chaque article ne peut être qu'en un seul exemplaire.
  On doit avoir les méthodes suivantes :
• Ajouter
• Contenu
• Taille
• Vide

-BONUS-
- je peux voir la liste de ce que le sac contient
- je peux retirer un objet du sac
*/

function sac () {
    this.max = 5;
    for (let i = 0; i <= this.max; i++) {
        this.contenu = prompt("choisissez l'article numéro " + i++);
        this.ajouter = confirm('Voulez vous encore choisir un article');
        this.contenu = this.contenu.split('');
        this.contenu = this.contenu.push;
        this.list = function () {
            while (this.contenu < this.max) {
                document.write('<ul>');
                document.write('<li style="list-style: none; text-align: center;">' + '<h1>' + this.contenu + '</h1>' + '</li>');
                document.write('</ul>');
            }
        }
        if (this.ajouter === true) {
            this.contenu++;
            this.contenu = prompt("choisissez l'article numéro " + i);
            if (this.contenu !== undefined) {
                this.ajouter = confirm('Voulez vous encore choisir un article');
            }
        } else if (this.contenu > this.max){
            console.log("trop d'article");
        } else if (this.contenu === this.max){
            console.log('vous avez atteint le nombre max d\'article');
        } else if (this.contenu < this.max){
            console.log('vous pouvez en rajouter encore');
        } else if (this.contenu.includes(this.contenu)) {
            console.log('Vous avez mis deux fois les mêmes articles');
        } else {
            this.list();
        }
    }
        this.list();
        this.contenu++;
}
let Sac = new sac();
console.log(Sac);