

publishers = {};
videoGames.forEach((game) => {
  let studio = game.studio;
  if(!publishers[studio]) {
    publishers[studio] = 1;
  }else{
    publishers[studio] = publishers[studio] + 1;
  }
  });

   //console.log(publishers)
// for(let publisher in publishers){
//     let publishDiv = document.querySelector(".publishers");
//     publishDiv.insertAdjacentHTML (
//          "afterbegin",
//          `<div className = "publisher-container>`
//     <h2 className="publisher"> ${publisher}</h2>
//     <h3 className="amount">${publishers[publisher]} </h3>
//     </div>);} 

// videogames.filter((game) => if(game.ratings.metacritic > 95).forEach((game)
// => document.querySelector(".games")
//             .insertAdjacentHTML("afterbegin", `<h2>${game.title}</h2>`))
//         );


console.log(companies)
for(let company in companies){
  let publishDiv = document.querySelector(".companies");
  publishDiv.insertAdjacentHTML ("afterbegin");
  `<div className = "company-container>`
  <h2 className="company">${company}</h2>
  <h3 className="amount">${companies[company]} </h3>
 
}