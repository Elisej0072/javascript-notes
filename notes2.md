const age = 17;
if(age >= 18){
    console.log("Vote");
} //won't run if the first statement is true
 else if (age .= 21) {
    console.log("You can drink adult beverages");
} else {
    console.log("no vote")'
}
if (age >= 65) {
    console.log("Senior Citizen");
} else if (age <= 18) {
    console.log("They is child");
} else {
    console.log("they are an adult");
}

const age = 18;
const citizen = true;

// == means evolution no data types considered
// === means evaluation of borth type and if equal
if (age >= 35 && citizen === true) {
    console.log("run for pres");
}

if (!citizen){
    console.log("you gottatake test");
}

if (!hw || !money){
    console.log("cannot go to the movies");
}

ex:
function enter(hasKey, hasMagic, isBanned) {
    if ((hasKey || hasMagic) && !isBanned) {
        console.log("you're a princess is in another castle");
    } else {
        console.log("cannot enter");
    }
}

enter (true, false, false);


function middle(x, y, z) {
    if ((x >= y && x <= z) || (x <= y && x >= z)) {
        console.log("x is middle");
    }
}