'use strict';
/*
let hello = "bonjour ";
let nom = prompt('Ton prénom ?');
let niche = ' à la niche';
document.write(hello + nom + niche);
*/
let name = ['Mathias', 'Melchior', 'Jonas', "Jotaro"];

document.write('<select>');
document.write('<option>name</option>');
    document.write('<option>' + name[0] + '</option>');
    document.write('<option>' + name[1] + '</option>');
    document.write('<option>' + name[2] + '</option>');
    document.write('<option>' + name[3] + '</option>');
document.write('</select>');