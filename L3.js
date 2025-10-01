//englishorfrench

/* function lang(sentence) {
    let t = 0;
    let s = 0;
    for(let i =0; i < sentence.length; i++){
        if(sentence[i] === "S" || sentence[i] === "s") {
            s = s + 1;
        } else if( sentence[i] === "T" || sentence[i] === "t") {
            t++;
        }
    } 
    if( t>s){
        console.log("English");
    } else{
        console.log("French");
    }
}
lang(sentence); */

//occupiedspaces

function Lang(y,t) {
   
 
    for(let i =0; i < y.length; i++){
        // console.log(y[i], t[i])
        if(y[i] === "."){
            console.log("found")
        }
    }
}

Lang('CC..C' ,'.CC..')