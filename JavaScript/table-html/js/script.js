"use strict";
document.write('<table cellpadding="0" cellspacing="0">');
document.write('<tr>');
for (let i = 0; i < 10; i++){
    document.write('<td style="border: 1px solid black; padding: 10px;">' + i + '</td>');
}
document.write('</tr>');
document.write('</table>');

document.write('<br>');

document.write('<table cellpadding="0" cellspacing="0">');
document.write('<tr>');
for (let i = 0; i < 10; i++){
    document.write('<td style="border: 1px solid black; padding: 10px;">' + i + '</td>');
    document.write('<tr>');
}
document.write('</tr>');
document.write('</table>');

document.write('<br>');

document.write('<table>');
document.write('<tr>');
for (let i = 0; i <= 9; i++){
    if (i % 2 == 0){
        document.write("<td style='background-color: red; border: 1px solid black; padding: 15px; color: white;'>" + i + "</td>");
    }
    else{
        document.write("<td style='background-color: green; border: 1px solid black; padding: 15px; color: white;'>" + i + "</td>");
    }
}
document.write('<tr>');
document.write('</table>');

document.write('<br>');

document.write('<table cellspacing="0">');
document.write('<tr>');
for (let i = 0; i < 9; i++){
    for (let i = 0; i <= 9; i++){
        if (i % 2 == 0){
            document.write("<td style='background-color: yellow; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }
        else{
            document.write("<td style='background-color: cyan; border: 1px solid black; padding: 15px;'>" + i + "</td>");
        }
    }
    document.write('<tr>');
}
document.write('<tr>');
document.write('</table>');

document.write('<br>');

document.write('<table cellspacing="0">');
for(let i = 0; i <= 99; i++){
    if (i % 10 == 0){
        document.write('<tr></tr>');
        document.write("<td style='background-color: pink; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
    else if (i % 2 === 0){
        document.write("<td style='background-color: pink; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
    else {
        document.write("<td style='background-color: mediumpurple; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
}
document.write('</table>');

document.write('<br>');

document.write('<table cellspacing="0">');
for(let i = 0; i <= 99; i++){
    if (i % 11 == 0 || i == 0){
        document.write("<td style='background-color: pink; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
    else if (i % 10 == 0){
        document.write('<tr></tr>');
        document.write("<td style='background-color: mediumpurple; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
    else {
        document.write("<td style='background-color: mediumpurple; border: 1px solid black; padding: 15px;'>" + i + '</td>');
    }
}
document.write('</table>');
