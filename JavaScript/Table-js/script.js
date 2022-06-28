tableau = ['XS', 'S', 'M', 'L', 'XL'];
// afficher les tailles dans un select
document.write('<select>');
for(let i = 0; i < tableau.length; i++){
    if(tableau[i] == 'M'){
        alert("Il n'y a plus de M");
    }
    else{
        document.write('<option>' +  tableau[i] + '</option>');
    }
}
document.write('</select>');