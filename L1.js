
function pokemon(p, b, d) {
    let paint = p;
    let paint_per_badge = b;
    let pokedollars = d;

    let badges_sold = Math.floor(p/b)
    let leftover_paint = p % b;
    let profit = leftover_paint + (paint_per_badge*badges_sold)

    return profit

}

profit= pokemon()
console.log(profit)