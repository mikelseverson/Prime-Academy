function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function formatNum (num) {
	num /= 100;
	num = parseFloat(Math.round(num * 100) / 100).toFixed(2);
	num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return num;
}

var User = {
	numCurrentApples : 0,
	numCurrentOranges : 0,
	numCurrentBananas : 0,
	numCurrentPears : 0,

	totalNumApples : 0,
	totalNumOranges : 0,
	totalNumBananas : 0,
	totalNumPears : 0,

	spentApples : 0,
	spentOranges : 0,
	spentBananas : 0,
	spentPears : 0,

	cash : 10000
}

//this is user inventory
var userBasket = {
	apples: 0,
	oranges: 0,
	bananas: 0,
	pears: 0
}

//something that defines fruit prices' starting point
	//[2] will indicate if price has gone up or down in last fiftyCents function call
var fruitPrices = [
	["apples", 50, ""], 
	["oranges", 50, ""],
	["bananas", 50, ""],
	["pears", 950, ""]
]

//function that changes price for each fruit
function fruitPriceUpdates() {
	for(var i = 0; i < fruitPrices.length; i++) {
		if(randomNumber(1, 2) == 1 && (fruitPrices[i][1] <= 900)){
			fruitPrices[i][1] += 50;
			fruitPrices[i][2] = "increase";
		} else if (fruitPrices[i][1] > 50) {
			fruitPrices[i][1] -= 50;
			fruitPrices[i][2] = "decrease";
		};
	}
	$('.apple > .price').text("$" + formatNum(fruitPrices[0][1]));
	$('.orange > .price').text("$" + formatNum(fruitPrices[1][1]));
	$('.banana > .price').text("$" + formatNum(fruitPrices[2][1]));
	$('.pear > .price').text("$" + formatNum(fruitPrices[3][1]));
}
//this will call the fruitPriceUpdates function each 15 seconds
setInterval('fruitPriceUpdates(fruitPrices);', 15000);

$(document).ready(function(){
	fruitPriceUpdates(fruitPrices);
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	$(".buy-apple").on('click', function(){
		User.numCurrentApples++;
		User.totalNumApples++;
		User.spentApples += fruitPrices[0][1];
		User.cash -= fruitPrices[0][1];
	var avgApple = User.spentApples / User.totalNumApples;
	$('.userapple:nth-child(2)').text(User.numCurrentApples);
	$('.userapple:nth-child(3)').text(formatNum(avgApple));
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".buy-orange").on('click', function(){
		User.numCurrentOranges++;
		User.totalNumOranges++;
		User.spentOranges += fruitPrices[1][1];
		User.cash -= fruitPrices[1][1];
	var avgOrange = User.spentOranges / User.totalNumOranges;
	$('.userorange:nth-child(2)').text(User.numCurrentOranges);
	$('.userorange:nth-child(3)').text(formatNum(avgOrange));
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".buy-banana").on('click', function(){
		User.numCurrentBananas++;
		User.totalNumBananas++;
		User.spentBananas += fruitPrices[2][1];
		User.cash -= fruitPrices[2][1];
	var avgBanana = User.spentBananas / User.totalNumBananas;
	$('.userbanana:nth-child(2)').text(User.numCurrentBananas);
	$('.userbanana:nth-child(3)').text(formatNum(avgBanana));
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".buy-pear").on('click', function(){
		User.numCurrentPears++;
		User.totalNumPears++;
		User.spentPears += fruitPrices[3][1];
		User.cash -= fruitPrices[3][1];
	var avgPear = User.spentPears / User.totalNumPears;
	$('.userpear:nth-child(2)').text(User.numCurrentPears);
	$('.userpear:nth-child(3)').text(formatNum(avgPear));
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".sell-apple").on('click', function(){
		User.numCurrentApples--;
		User.cash += fruitPrices[0][1];
	$('.userapple:nth-child(2)').text(User.numCurrentApples);
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".sell-orange").on('click', function(){
		User.numCurrentOranges--;
		User.cash += fruitPrices[1][1];
	$('.userorange:nth-child(2)').text(User.numCurrentOranges);
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".sell-banana").on('click', function(){
		User.numCurrentBananas--;
		User.cash += fruitPrices[2][1];
	$('.userbanana:nth-child(2)').text(User.numCurrentBananas);
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});
	
	$(".sell-pear").on('click', function(){
		User.numCurrentPears--;
		User.cash += fruitPrices[3][1];
	$('.userpear:nth-child(2)').text(User.numCurrentPears);
	$('.cash').text("You have $" + formatNum(User.cash) + " in your bank.");
	});

}); 



