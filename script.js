function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);

}

//this is user inventory
var userBasket {
	apples: 0,
	oranges: 0,
	bananas: 0,
	grapes: 0,
	pears: 0
}

//something that defines fruit prices' starting point
var fruitPrices [
	[apples, 200],
	[oranges, 400],
	[bananas, 100],
	[grapes, 700],
	[pears, 500]
]

//this will call the fruitPriceUpdates function each 15 seconds
setInterval(fruitPriceUpdates(fruitPrices), 15000);

//function that changes price for each fruit
function fruitPriceUpdates(fruit) {
	for(var i = 0; i < fruitPrices.length; i++) {
		fiftyCents(fruit[i][1]);

	}
}

function fiftyCents(price){
	if(randomNumber(1, 2)) == 1){
		price += 50;
	} else {
		price -= 50;
	}
}

console.log(fruitPrices);
console.log(fiftyCents(3));

