/* ARROW FUNCTIONS
(paramètres) => { instructions }

const truc = function(paramètres) {
    instructions
    return résultat
}
*/

const addES5 = function (x, y){
    return x + y;
}
console.log(addES5(5, 6));


const hello = function (){
   return 'Hello World';
}
console.log(hello());


const addES6 = (x, y) => { return x + y };
console.log(addES6(1, 2));

const prices = [4, 5, 14, 20, 45, 3, 8, 15];


let greaterThan10 = prices.filter(function (p){
    return p => 10;
});
console.log(greaterThan10);