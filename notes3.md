Loops/Arrays

const students = ["Jean", "London", "Damian", "Thomas"];

console.log(students[0]);

function printAll(list){
    //iteration
    for(let i =0; i < list.length; i++){
        //sequencing
        console.log(i);
        console.log(students[i]);
    }
}
printAll(students);

const students = ["Jean", "London", "Damian", "Thomas"];
students.push("Serena");
console.log(students);
/*
students.forEach((student) => console.log(student));
//for each --- in the --- array 
ex:students.forEach((el, index) => console.log(el, index +1));

function add1(a, b) => {
    return a + b;
}
//arrow function doesn't need return
const add2 = (a, b) => a + b;
console.log(add2(5,6));

const found = students.find((student) => student === "London");
consol.log(found);

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x = numbs.filter((numb) => numb % 2 === 0);
console.log(x);
numbs.filter((numb) => numb % 2 === 0).forEach((el) => console.log(el));

let number
while (number > 0){
    console.log("Countdown:" + number);
    number--; //subtract 1 each time
}