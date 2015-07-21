function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);

}

//this is user inventory
var userBasket = {
	apples: 0,
	oranges: 0,
	bananas: 0,
	grapes: 0,
	pears: 0
}

//something that defines fruit prices' starting point
	//[2] will indicate if price has gone up or down in last fiftyCents function call
var fruitPrices = [
	["apples", 50, ""],
	["oranges", 50, ""],
	["bananas", 50, ""],
	["grapes", 950, ""],
	["pears", 950, ""]
]

var change = "";

//this will call the fruitPriceUpdates function each 15 seconds
setInterval(fruitPriceUpdates(fruitPrices), 15000);

//function that changes price for each fruit
function fruitPriceUpdates(fruit) {
	for(var i = 0; i < fruitPrices.length; i++) {
		fruit[i][1] = fiftyCents(fruit[i][1], i);
		console.log(fruit[i][1]);
	}
}

function fiftyCents(price, i){
	console.log(index);
	if(randomNumber(1, 2) == 1 && (price <= 900)){
		price += 50;
		fruit[i][2] = "increase";
	} else if (price > 50) {
		price -= 50;
		fruit[i][2] = "decrease";

	}
	return price;
}

console.log(fruitPrices);
console.log(fiftyCents(750));

