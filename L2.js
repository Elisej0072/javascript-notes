
function enter(toolight, medium, tooheavy) {
    if(toolight || tooheavy) {
        console.log("wrong bowl");
    } 
    else if(medium) {
        console.log("right bowl");
    }
}


function middle(A, B, C) {
    if ((C>= B && B <= A) || (B <= C && B>= A)) {
        console.log("B is middle");
    } else if ((B>= A && A <= C) || (A <= C && A>= B)) {
        console.log("C is middle");
    } else {
        console.log("B is middle");
    }
}



function enter(firsteight, firstnine, other) {
    if(firsteight || firstnine) {
        console.log("telemarketer")
    } else if(other) {
        console.log("regular")
    }
}
function enter(lasteight, lastnine, other) {
    if(lasteight || lastnine) {
        console.log("telemarketer")
    } else if(other) {
        console.log("regular")
    }
}
function enter(same , different) {
    if(same) {
        console.log("telemarketer")
    } else if(different) {
        console.log("regular")
    }
}

enter(false , true, true)


function enter(first89, last89, middlesame) {
    if(first89) {
        console.log ("telemarketer")
    } else {
        console.log("regular")
    }
    if(last89) {
        console.log ("telemarketer")
    } else {
        console.log("regular")
    }
    if(middlesame) {
        console.log("telemarketer")
    } else {
        console.log("regular")
    }
}

enter(true, true, true)

function telemarketer(d1, d2, d3, d4) {
    if((d1 === 8 || d1===9) && (d4 === 8 || d4 ===9) && d2 == d3) {
        console.log("ignore");
    }
    console.log("answer");
}