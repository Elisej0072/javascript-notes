// let allows the variable to change
/* let  x = 5;
x=6; */
//const cannot be redefined
console.log(x);
/* const x+80;
x = 79;
console.log(x);
*/
//Boolean represent true and false
cons citizen = true;

//string represent names, characters, etc.
const name = "Jonoth";

//integers/ numbers
const age = 17;
//null is the absence of value
let f = null;
//undefined
let g;

//functions are input output machines that can accept arguements or parameters
//declare and define function
function add(x,y) {
    console.log(x + y);
    return x + y;
}
//run the function
const bill = add(5,15);
console.log(bill);
*/

//scope

const x=7
function helloX(){
    //scoped variables are in-accessible outside of their functions 
    cons x = 9;
    //console.log(x);
}
console.log(x);
//x needs to be defined 

const name = "Ben";
//template literal allows us to use variables inside strings
console.log("Hello ${name}`);


