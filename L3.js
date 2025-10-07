//englishorfrench

/* function Lang(sentence) {
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
   let occupied = 0
 
    for(let i =0; i < y.length; i++){
        // console.log(y[i], t[i])
        if(y[i] === "C" &&  t[i] === "C"){
            occupied++;
        }
    }
console.log(occupied);
}
Lang('CC..C' ,'.CC..')
