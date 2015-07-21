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

//function that changes price for each fruit
function fruitPriceUpdates() {
	for(var i = 0; i < fruitPrices.length; i++) {
		if(randomNumber(1, 2) == 1 && (fruitPrices[i][1] <= 900)){
			fruitPrices[i][1] += 50;
			fruitPrices[i][2] = "increase";
			console.log("increase");
		} else if (fruitPrices[i][1] > 50) {
			fruitPrices[i][1] -= 50;
			fruitPrices[i][2] = "decrease";
			console.log("decrease");
		};
	}
	console.log("pears price: " + fruitPrices[1][1] + "pears indicator: " + fruitPrices[1][2]);
}

//this will call the fruitPriceUpdates function each 15 seconds
setInterval('fruitPriceUpdates(fruitPrices);', 15000);




